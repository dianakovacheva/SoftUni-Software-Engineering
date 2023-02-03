function toggle() {
    const buttonElement = document.getElementsByClassName('button')[0];
    const divElement = document.getElementById('extra');

    if (buttonElement.textContent === 'More') {
        divElement.style.display = 'block';
        buttonElement.textContent = 'Less';
    } else {
        divElement.style.display = 'none';
        buttonElement.textContent = 'More';
    }
}