function addItem() {
    // get all needed DOM elements
    const menuElement = document.getElementById('menu');
    const newItemTextElement = document.getElementById('newItemText').value;
    const newItemValueElement = document.getElementById('newItemValue').value;
    // create new DOM elements
    const optionElement = document.createElement('option');

    if (newItemTextElement !== '' && newItemValueElement !== '') {
        optionElement.textContent = newItemTextElement;
        optionElement.value = newItemValueElement;
        menuElement.appendChild(optionElement);
    }

    // clear the value of the two input fields
    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}