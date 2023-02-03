function validate() {
    const pattern = /[a-z]+\@[a-z]+\.[a-z]+/g;
    const inputElement = document.getElementById('email');
    inputElement.addEventListener('change', e => {
        if (pattern.test(inputElement.value) !== true && inputElement.value.length !== 0) {
            inputElement.classList.add('error');
        } else {
            inputElement.classList.remove('error');
        }
    })
    document.getElementById('email').value = '';
}