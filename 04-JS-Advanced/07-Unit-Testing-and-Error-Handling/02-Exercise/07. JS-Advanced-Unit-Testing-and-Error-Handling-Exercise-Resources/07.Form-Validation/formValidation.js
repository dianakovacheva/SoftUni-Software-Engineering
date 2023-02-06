function validate() {
    const formElement = document.getElementById('registerForm');
    // the username needs to be between 3 and 20 symbols inclusively and only letters and numbers are allowed
    const validUserName = /^[A-Za-z0-9]{3,20}$/g;
    // the password and confirm-password must be between 5 and 15 inclusively symbols and only word characters are allowed (letters, numbers, and _)
    const validPassword = /^\w{5,15}$/g;
    // the email field must contain the “@” symbol and at least one "."(dot) after it
    const validEmailAdress = /.*@.*\..*/g;
    // use event.preventDefault() to avoid reloading the page upon clicking the [Submit] button
    const companyCheck = document.getElementById('company');
    const companyField = document.getElementById('companyInfo');
    companyCheck.addEventListener('change', () => {
        if (companyCheck.checked) {
            companyField.style.display = 'block';
        } else {
            companyField.style.display = 'none';
        }
    });

    formElement.addEventListener('submit', (event) => {
        event.preventDefault();
        const userNameInput = document.getElementById('username');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirm-password');
        const companyNumberInput = document.getElementById('companyNumber');
        const validField = document.getElementById('valid');
        let usernameIsValid = false;
        let passwordIsValid = false;
        let confirmPasswordIsValid = false;
        let emailIsValid = false;
        let companyNumberIsValid = false;
        if (validUserName.test(userNameInput.value) && userNameInput.value.length >= 3 && userNameInput.value.length <= 20) {
            usernameIsValid = true;
        }
        if (validEmailAdress.test(emailInput.value)) {
            emailIsValid = true;
        }
        if (validPassword.test(passwordInput.value) && passwordInput.value.length >= 5 && passwordInput.value.length <= 15 && passwordInput.value === confirmPasswordInput.value) {
            passwordIsValid = true;
            confirmPasswordIsValid = true;
        }
        if (companyCheck.checked) {
            if (companyNumberInput.value >= 1000 && companyNumberInput.value <= 9999) {
                companyNumberIsValid = true;
            }
        } else {
            companyNumberIsValid = true;
        }

        if (usernameIsValid && emailIsValid && passwordIsValid && confirmPasswordIsValid && companyNumberIsValid) {
            validField.style.display = 'block';
        } else {
            validField.style.display = 'none';
        }

        if (!usernameIsValid) {
            userNameInput.style.borderColor = 'red';
        } else {
            userNameInput.style.border = 'none';
        }

        if (!emailIsValid) {
            emailInput.style.borderColor = 'red';
        } else {
            emailInput.style.border = 'none';
        }

        if (!passwordIsValid) {
            passwordInput.style.borderColor = 'red';
        } else {
            passwordInput.style.border = 'none';
        }
        if (!confirmPasswordIsValid) {
            confirmPasswordInput.style.borderColor = 'red';
        } else {
            companyNumberInput.style.border = 'none';
        }
        if (!companyNumberIsValid) {
            companyNumberInput.style.borderColor = 'red';
        } else {
            companyNumberInput.style.border = 'none';
        }
    });

    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('confirm-password').value = '';
    document.getElementById('companyNumber').value = '';
}