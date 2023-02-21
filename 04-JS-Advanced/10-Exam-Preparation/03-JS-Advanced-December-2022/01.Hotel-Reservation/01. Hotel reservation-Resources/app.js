window.addEventListener('load', solve);

function solve() {
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const checkInInput = document.getElementById('date-in');
    const checkOutInput = document.getElementById('date-out');
    const personCount = document.getElementById('people-count');
    const nextBtn = document.getElementById('next-btn');
    const reservetionInfoUlElement = document.querySelector('.info-list');
    const confirmListUlElement = document.querySelector('.confirm-list');
    // add eventListener to the ["Next"] button
    nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (firstNameInput.value !== '' && lastNameInput.value !== '' && checkInInput.value !== '' && checkOutInput.value !== '' && checkInInput.value < checkOutInput.value && personCount.value > 0 && personCount.value !== '') {
            const liElementReservationContent = document.createElement('li');
            liElementReservationContent.classList.add('reservation-content');
            const articleElement = document.createElement('article');
            const nameH3Element = document.createElement('h3');
            nameH3Element.textContent = `Name: ${firstNameInput.value} ${lastNameInput.value}`;
            const pElementCheckIn = document.createElement('p');
            pElementCheckIn.textContent = `From date: ${checkInInput.value}`;
            const pElementCheckOut = document.createElement('p');
            pElementCheckOut.textContent = `To date: ${checkOutInput.value}`;
            const pElementPeopleCount = document.createElement('p');
            pElementPeopleCount.textContent = `For ${personCount.value} people`;
            const editBtn = document.createElement('button');
            editBtn.classList.add('edit-btn');
            editBtn.textContent = 'Edit';
            const continueBtn = document.createElement('button');
            continueBtn.classList.add('continue-btn');
            continueBtn.textContent = 'Continue';
            // append all elements
            reservetionInfoUlElement.appendChild(liElementReservationContent);
            liElementReservationContent.appendChild(articleElement);
            articleElement.appendChild(nameH3Element);
            articleElement.appendChild(pElementCheckIn);
            articleElement.appendChild(pElementCheckOut);
            articleElement.appendChild(pElementPeopleCount);
            liElementReservationContent.appendChild(editBtn);
            liElementReservationContent.appendChild(continueBtn);
            // disable the ["Next"] button
            nextBtn.disabled = true;
            // clear all input fields
            document.getElementById('first-name').value = '';
            document.getElementById('last-name').value = '';
            document.getElementById('date-in').value = '';
            document.getElementById('date-out').value = '';
            document.getElementById('people-count').value = '';
            // add eventListener to the ["Edit"] button
            editBtn.addEventListener('click', () => {
                nextBtn.disabled = false;
                const personNames = nameH3Element.textContent.split(': ')[1].split(' ');
                firstNameInput.value = personNames[0];
                lastNameInput.value = personNames[1];
                const checkInDate = pElementCheckIn.textContent.split(': ')[1];
                checkInInput.value = checkInDate;
                const checkOutDate = pElementCheckOut.textContent.split(': ')[1];
                checkOutInput.value = checkOutDate;
                const personCountInfo = pElementPeopleCount.textContent.split(' ')[1];
                personCount.value = personCountInfo;
                liElementReservationContent.remove();
            });
            // add eventListener to the ["Continue"] button
            continueBtn.addEventListener('click', () => {
                const liElementContent = document.createElement('li');
                liElementContent.classList.add('reservation-content');
                const confirmBtn = document.createElement('button');
                confirmBtn.classList.add('confirm-btn');
                confirmBtn.textContent = 'Confirm';
                const cancelBtn = document.createElement('button');
                cancelBtn.classList.add('cancel-btn');
                cancelBtn.textContent = 'Cancel';
                // append all elements
                confirmListUlElement.appendChild(liElementContent);
                liElementContent.appendChild(articleElement);
                articleElement.appendChild(nameH3Element);
                articleElement.appendChild(pElementCheckIn);
                articleElement.appendChild(pElementCheckOut);
                articleElement.appendChild(pElementPeopleCount);
                liElementContent.appendChild(confirmBtn);
                liElementContent.appendChild(cancelBtn);
                liElementReservationContent.remove();
                // add eventListener to the ["Confirm"] button
                confirmBtn.addEventListener('click', () => {
                    confirmListUlElement.remove();
                    nextBtn.disabled = false;
                    const h1ElementVerification = document.getElementById('verification');
                    h1ElementVerification.classList.add('reservation-confirmed');
                    h1ElementVerification.innerHTML = 'Confirmed.';
                });
                // add eventListener to the ["Cancel"] button
                cancelBtn.addEventListener('click', () => {
                    confirmListUlElement.remove();
                    nextBtn.disabled = false;
                    const h1ElementVerification = document.getElementById('verification');
                    h1ElementVerification.classList.add('reservation-cancelled');
                    h1ElementVerification.innerHTML = 'Cancelled.';
                });
            })
        }
    })
}