function validate() {
    const emailInputElement = document.getElementById('email');
    // a valid email will be in format: <name>@<domain>.<extension>
    const pattern = /[a-z]+\@[a-z]+\.[a-z]+/g;
    emailInputElement.addEventListener('change', onChange);

    function onChange(event) {
        if (pattern.test(event.target.value)) {
            event.target.classList.remove('error');
        } else {
            event.target.classList.add('error');
        }
    };
}