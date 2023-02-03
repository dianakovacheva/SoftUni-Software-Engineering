function deleteByEmail() {
    const userInputElement = document.querySelector("input[name = 'email']");
    const trElementsArray = Array.from(document.querySelectorAll('#customers tbody tr'));
    const result = document.getElementById('result');
    trElementsArray.forEach(row => {
        if (row.textContent.includes(userInputElement.value) && userInputElement.value.length > 0) {
            row.remove();
            result.textContent = 'Deleted.';
        } else {
            result.textContent = 'Not found.';
        }
    });
    document.querySelector('input').value = '';
}