function addItem() {
    const userInputValue = document.getElementById('newItemText').value;
    const ulElement = document.getElementById('items');
    // Create new li element
    const newLiElement = document.createElement('li');
    // Check if the user has entered something in the input field
    if (userInputValue.length > 0) {
        newLiElement.textContent = userInputValue;
        ulElement.appendChild(newLiElement);
    }
    // Reset the value of the input field to an empty string
    document.getElementById('newItemText').value = '';
}