function focused() {
    const inputElements = Array.from(document.querySelectorAll('div input[type="text"]'));
    inputElements.forEach(element => {
        element.addEventListener('focus', (event) => {
            event.target.parentElement.classList.add('focused');
        });
        element.addEventListener('blur', (event) => {
            event.target.parentElement.classList.remove('focused')
        });
    });
}