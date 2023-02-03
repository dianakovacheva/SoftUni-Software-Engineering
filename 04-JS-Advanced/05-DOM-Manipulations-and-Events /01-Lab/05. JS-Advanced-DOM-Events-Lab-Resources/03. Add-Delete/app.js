function addItem() {
    // read input value
    const inputElementValue = document.getElementById('newItemText').value;
    const ulElement = document.getElementById('items');
    // create new <li>
    const newLiElement = document.createElement('li');
    newLiElement.textContent = inputElementValue;
    // create "a" element
    const deleteBtn = document.createElement('a');
    deleteBtn.href = '#';
    deleteBtn.textContent = '[Delete]';

    if (inputElementValue.length > 0) {
        // add new <li> to list
        ulElement.appendChild(newLiElement);
        // append deleteBtn to <li>
        newLiElement.appendChild(deleteBtn);
        // if deleteBtn is clicked, remove current row
        deleteBtn.addEventListener('click', () => newLiElement.remove());
        document.getElementById('newItemText').value = '';
    }
}

