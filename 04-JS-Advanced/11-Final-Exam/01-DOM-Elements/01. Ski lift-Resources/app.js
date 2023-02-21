window.addEventListener('load', solve);


function solve() {
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const numPeopleInput = document.getElementById('people-count');
    const fromDateInput = document.getElementById('from-date');
    const daysCountInput = document.getElementById('days-count');
    const nextStepBtn = document.getElementById('next-btn');
    const ticketInfoList = document.querySelector('.ticket-info-list');
    const form = document.querySelector('form');
    const confirmTicket = document.querySelector('.confirm-ticket');
    const mainDivElement = document.getElementById('main');

    nextStepBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (firstNameInput.value !== '' && lastNameInput.value !== '' && numPeopleInput.value !== '' && numPeopleInput.value > 0 && fromDateInput.value !== '' && daysCountInput.value !== '' && daysCountInput.value > 0) {
            const liElemetTicket = document.createElement('li');
            liElemetTicket.classList.add('ticket');
            ticketInfoList.appendChild(liElemetTicket);
            const articleElement = document.createElement('article');
            liElemetTicket.appendChild(articleElement);
            const h3Element = document.createElement('h3');
            let firstName = firstNameInput.value;
            let lastName = lastNameInput.value;
            h3Element.textContent = `Name: ${firstName} ${lastName}`;
            articleElement.appendChild(h3Element);
            const pDateElement = document.createElement('p');
            let date = fromDateInput.value;
            pDateElement.textContent = `From date: ${date}`;
            articleElement.appendChild(pDateElement);
            const pDaysCountElement = document.createElement('p');
            let daysCount = daysCountInput.value;
            pDaysCountElement.textContent = `For ${daysCount} days`;
            articleElement.appendChild(pDaysCountElement);
            const pPeopleCount = document.createElement('p');
            let peopleCount = numPeopleInput.value;
            pPeopleCount.textContent = `For ${peopleCount} people`;
            articleElement.appendChild(pPeopleCount);
            const editBtn = document.createElement('button');
            editBtn.classList.add('edit-btn');
            editBtn.textContent = 'Edit';
            editBtn.disabled = false;
            liElemetTicket.appendChild(editBtn);
            const continueBtn = document.createElement('button');
            continueBtn.classList.add('continue-btn');
            continueBtn.textContent = 'Continue';
            continueBtn.disabled = false;
            liElemetTicket.appendChild(continueBtn);
            nextStepBtn.disabled = true;
            form.reset();
            editBtn.addEventListener('click', () => {
                firstNameInput.value = firstName;
                lastNameInput.value = lastName;
                numPeopleInput.value = peopleCount;
                fromDateInput.value = date;
                daysCountInput.value = daysCount;
                nextStepBtn.disabled = false;
                liElemetTicket.remove();
            });
            continueBtn.addEventListener('click', () => {
                const liElementContinue = document.createElement('li');
                liElementContinue.classList.add('ticket-content');
                confirmTicket.appendChild(liElementContinue);
                liElementContinue.appendChild(articleElement);
                const confirmBtn = document.createElement('button');
                confirmBtn.classList.add('confirm-btn');
                confirmBtn.textContent = 'Confirm';
                liElementContinue.appendChild(confirmBtn);
                const cancelBtn = document.createElement('button');
                cancelBtn.classList.add('cancel-btn');
                cancelBtn.textContent = 'Cancel';
                liElementContinue.appendChild(cancelBtn);
                editBtn.remove();
                continueBtn.remove();
                liElemetTicket.remove();
                cancelBtn.addEventListener('click', () => {
                    liElementContinue.remove();
                    nextStepBtn.disabled = false;
                });
                confirmBtn.addEventListener('click', () => {
                    mainDivElement.replaceChildren();
                    const h1Element = document.createElement('h1');
                    h1Element.setAttribute('id', 'thank-you');
                    h1Element.textContent = 'Thank you, have a nice day!';
                    const backBtn = document.createElement('button');
                    backBtn.setAttribute('id', 'back-btn');
                    backBtn.textContent = 'Back';
                    mainDivElement.appendChild(h1Element);
                    mainDivElement.appendChild(backBtn);
                    backBtn.addEventListener('click', () => {
                        location.reload();
                    });
                })
            });
        }
    });
}




