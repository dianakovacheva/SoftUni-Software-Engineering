function notify(message) {
  const divNotificationElement = document.getElementById('notification');
  divNotificationElement.textContent = message;
  // the divNotificationElement starts hidden
  divNotificationElement.style.display = 'block';
  // after the user clicks on it, hide the divNotificationElement
  divNotificationElement.addEventListener('click', (event) => {
    event.target.style.display = 'none';
  });
}