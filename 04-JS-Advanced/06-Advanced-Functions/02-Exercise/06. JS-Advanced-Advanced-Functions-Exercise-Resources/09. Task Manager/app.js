function solve() {
    const taskElement = document.getElementById('task');
    const descriptionElement = document.getElementById('description');
    const dateElement = document.getElementById('date');
    const addButtonElement = document.getElementById('add');
    // get all sections
    const [addTaskSection, openSection, inProgressSection, completeSection] = document.querySelectorAll('section');
    // prevent default action of add button
    addButtonElement.addEventListener('click', addToDo);
    function addToDo(event) {
        event.preventDefault();
        // check if input length is different that 0
        if (taskElement.value.trim().length > 0 && descriptionElement.value.trim().length > 0 && dateElement.value.trim().length > 0) {
            // create article DOM elements
            const articleElement = document.createElement('article');
            const h3Element = document.createElement('h3');
            h3Element.textContent = taskElement.value;
            const pElement1 = document.createElement('p');
            pElement1.textContent = `Description: ${descriptionElement.value}`;
            const pElement2 = document.createElement('p');
            pElement2.textContent = `Due Date: ${dateElement.value}`;
            const divBtnsElement = document.createElement('div');
            divBtnsElement.classList.add('flex');
            // create [Start] button
            const startBtnElement = document.createElement('button');
            startBtnElement.textContent = 'Start';
            startBtnElement.classList.add('green');
            // when the [Start] button is clicked, move the Task in the section "In Progress"
            startBtnElement.addEventListener('click', moveTask);
            // create [Delete] button
            const deleteBtnElement = document.createElement('button');
            deleteBtnElement.textContent = 'Delete';
            deleteBtnElement.classList.add('red');
            // when the [Delete] button is clicked, remove the Task (whole article) from the HTML
            deleteBtnElement.addEventListener('click', deleteTaskFromHTML);
            // append [Start] button and [Delete] button to divBtnsElement
            divBtnsElement.appendChild(startBtnElement);
            divBtnsElement.appendChild(deleteBtnElement);
            // append all required elements to the articleElement
            articleElement.appendChild(h3Element);
            articleElement.appendChild(pElement1);
            articleElement.appendChild(pElement2);
            articleElement.appendChild(divBtnsElement);
            // append articleElement to the openSection
            openSection.lastElementChild.appendChild(articleElement);
            // write a function which moves the Task in the section "In Progress"
            function moveTask() {
                startBtnElement.remove();
                const finishBtnElement = document.createElement('button');
                finishBtnElement.textContent = 'Finish';
                finishBtnElement.classList.add('orange');
                // after clicking the [Finish] button, the Task will be completed, and you should move the article to the section "Complete"
                finishBtnElement.addEventListener('click', completeTask);
                // append [Finish] button to divBtnsElement
                divBtnsElement.appendChild(finishBtnElement);
                // append articleElement to the inProgressSection
                inProgressSection.lastElementChild.appendChild(articleElement);
            }
            //  // write a function which moves the Task in the section "Complete"
            function completeTask() {
                // remove the buttons with their parent div-element
                divBtnsElement.remove();
                // append articleElement to the completeSection
                completeSection.lastElementChild.appendChild(articleElement);

            }
            // write a function which deletes the Task (whole article) from the HTML
            function deleteTaskFromHTML() {
                articleElement.remove();
            }
        }
    }
}