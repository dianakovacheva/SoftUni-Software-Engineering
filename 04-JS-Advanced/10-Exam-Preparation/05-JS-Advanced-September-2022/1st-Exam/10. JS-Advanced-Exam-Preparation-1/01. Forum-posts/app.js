window.addEventListener("load", solve);
function solve() {
    const titleInputElement = document.getElementById('post-title');
    const postCategoryElement = document.getElementById('post-category');
    const postContentElement = document.getElementById('post-content');
    const publishBtnElement = document.getElementById('publish-btn');
    const ulElement = document.getElementById('review-list');
    let inputResultArr = [];
    publishBtnElement.addEventListener('click', () => {
        if (!titleInputElement.value || !postCategoryElement.value || !postContentElement.value) {
            return;
        }
        inputResultArr.push(titleInputElement.value, postCategoryElement.value, postContentElement.value);
        const liElement = document.createElement('li');
        liElement.classList.add('rpost');
        ulElement.appendChild(liElement);
        const articleElement = document.createElement('article');
        liElement.appendChild(articleElement);
        const h4Element = document.createElement('h4');
        h4Element.textContent = titleInputElement.value;
        articleElement.appendChild(h4Element);
        const pElement = document.createElement('p');
        pElement.textContent = `Category: ${postCategoryElement.value}`;
        articleElement.appendChild(pElement);
        const secondPElement = document.createElement('p');
        secondPElement.textContent = `Content: ${postContentElement.value}`;
        articleElement.appendChild(secondPElement);
        const editBtnElement = document.createElement('button');
        editBtnElement.classList.add('action-btn', 'edit');
        editBtnElement.textContent = 'Edit';
        liElement.appendChild(editBtnElement);
        const approveBtnElement = document.createElement('button');
        approveBtnElement.classList.add('action-btn', 'approve');
        approveBtnElement.textContent = 'Approve';
        liElement.appendChild(editBtnElement);
        liElement.appendChild(approveBtnElement);
        // clear input fields
        document.getElementById('post-title').value = '';
        document.getElementById('post-category').value = '';
        document.getElementById('post-content').value = '';
        // When the ["Edit"] button is clicked, the information from the post must be sent to the input’s fields and the record should be deleted from the ul "review-list"
        editBtnElement.addEventListener('click', (e) => {
            titleInputElement.value = inputResultArr[0];
            postCategoryElement.value = inputResultArr[1];
            postContentElement.value = inputResultArr[2];
            e.currentTarget.parentElement.remove();
        });
        // Add eventListener to ["Approve"] button
        approveBtnElement.addEventListener('click', (e) => {
            e.currentTarget.parentElement.remove();
            const ulElementPublishedList = document.getElementById('published-list');
            ulElementPublishedList.appendChild(liElement);
            editBtnElement.remove();
            approveBtnElement.remove();
        });
        // Add eventListener to ["Clear"] button
        const clearBtnElement = document.getElementById('clear-btn');
        clearBtnElement.addEventListener('click', () => {
            liElement.remove();
        })
    });
}