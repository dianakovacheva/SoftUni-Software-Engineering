function solve() {
    const firstNameInputField = document.getElementById('fname');
    const lastNameInputField = document.getElementById('lname');
    const emailInputField = document.getElementById('email');
    const birthDateInputField = document.getElementById('birth');
    const positionInputField = document.getElementById('position');
    const salaryInputField = document.getElementById('salary');
    const hireWorkerBtn = document.getElementById('add-worker');
    const tBodyElement = document.getElementById('tbody');
    const budget = document.getElementById('sum');
    let sum = 0;
    // add eventListener to the ["Hire Worker"] button
    hireWorkerBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (firstNameInputField.value && lastNameInputField.value && emailInputField.value && birthDateInputField.value && positionInputField.value && salaryInputField.value && salaryInputField.value > 0) {
            const trElement = document.createElement('tr');
            const tdFirstName = document.createElement('td');
            tdFirstName.textContent = firstNameInputField.value;
            const tdLastName = document.createElement('td');
            tdLastName.textContent = lastNameInputField.value;
            const tdEmail = document.createElement('td');
            tdEmail.textContent = emailInputField.value;
            const tdBirthDate = document.createElement('td');
            tdBirthDate.textContent = birthDateInputField.value;
            const tdPosition = document.createElement('td');
            tdPosition.textContent = positionInputField.value;
            const tdSalary = document.createElement('td');
            tdSalary.textContent = salaryInputField.value;
            const tdBtns = document.createElement('td');
            const fireBtn = document.createElement('button');
            fireBtn.classList.add('fired');
            fireBtn.textContent = 'Fired';
            const editBtn = document.createElement('button');
            editBtn.classList.add('edit');
            editBtn.textContent = 'Edit';
            tdBtns.appendChild(fireBtn);
            tdBtns.appendChild(editBtn);
            trElement.appendChild(tdFirstName);
            trElement.appendChild(tdLastName);
            trElement.appendChild(tdEmail);
            trElement.appendChild(tdBirthDate);
            trElement.appendChild(tdPosition);
            trElement.appendChild(tdSalary);
            trElement.appendChild(tdBtns);
            tBodyElement.appendChild(trElement);
            // add the salary to the budget message. The sum should be rounded to the second decimal number
            let wantedSalary = Number(salaryInputField.value);
            sum = Number(sum) + Number(wantedSalary);
            budget.textContent = (sum).toFixed(2);
            // add eventListener to the ["Edit"] button
            editBtn.addEventListener('click', () => {
                firstNameInputField.value = tdFirstName.textContent;
                lastNameInputField.value = tdLastName.textContent;
                emailInputField.value = tdEmail.textContent;
                birthDateInputField.value = tdBirthDate.textContent;
                positionInputField.value = tdPosition.textContent;
                salaryInputField.value = tdSalary.textContent;
                trElement.remove();
                sum = Number(sum) - Number(wantedSalary);
                budget.textContent = (sum).toFixed(2);
            });
            // add eventListener to the ["Fired"] button
            fireBtn.addEventListener('click', () => {
                trElement.remove();
                sum = Number(sum) - Number(wantedSalary);
                budget.textContent = (sum).toFixed(2);
            });
            // clear all input fields
            document.getElementById('fname').value = '';
            document.getElementById('lname').value = '';
            document.getElementById('email').value = '';
            document.getElementById('birth').value = '';
            document.getElementById('position').value = '';
            document.getElementById('salary').value = '';
        }
    });
};
solve()