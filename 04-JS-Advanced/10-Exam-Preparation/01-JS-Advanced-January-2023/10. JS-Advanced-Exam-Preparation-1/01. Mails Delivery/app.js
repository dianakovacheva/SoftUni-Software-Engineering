function solve() {
    const inputRecipientName = document.getElementById('recipientName');
    const inputTitleElement = document.getElementById('title');
    const inputMessageElement = document.getElementById('message');
    const addBtnElement = document.getElementById('add');
    const resetBtnElement = document.getElementById('reset');
    const ulElement = document.querySelector('.list-mails ul');
    const ulElementSentList = Array.from(document.getElementsByClassName('sent-list'))[0];
    const ulElementDeleteList = Array.from(document.getElementsByClassName('delete-list'))[0];
    // add eventListener to the ['Add to the List'] button
    addBtnElement.addEventListener('click', (e) => {
        e.preventDefault();
        if (!inputRecipientName.value || !inputTitleElement.value || !inputMessageElement.value) {
            return;
        }
        const liElement = document.createElement('li');
        const h4TitleElement = document.createElement('h4');
        h4TitleElement.textContent = `Title: ${inputTitleElement.value}`;
        const h4RecipientName = document.createElement('h4');
        h4RecipientName.textContent = `Recipient Name: ${inputRecipientName.value}`;
        const spanElement = document.createElement('span');
        spanElement.textContent = inputMessageElement.value
        const divElement = document.createElement('div');
        divElement.setAttribute('id', 'list-action');
        const sendBtnElement = document.createElement('button');
        sendBtnElement.setAttribute('id', 'send');
        sendBtnElement.textContent = 'Send';
        const deleteBtnElementListMails = document.createElement('button');
        deleteBtnElementListMails.setAttribute('id', 'delete');
        deleteBtnElementListMails.textContent = 'Delete';
        // append all elements
        divElement.appendChild(sendBtnElement);
        divElement.appendChild(deleteBtnElementListMails);
        liElement.appendChild(h4TitleElement);
        liElement.appendChild(h4RecipientName);
        liElement.appendChild(spanElement);
        liElement.appendChild(divElement);
        ulElement.appendChild(liElement);
        // cleare all input fields
        document.getElementById('recipientName').value = '';
        document.getElementById('title').value = '';
        document.getElementById('message').value = '';
        // add eventListener to the ["Send"] button
        sendBtnElement.addEventListener('click', (e) => {
            e.preventDefault();
            const parentLiElement = e.currentTarget.parentElement.parentElement;
            const h4s = parentLiElement.getElementsByTagName('h4');
            let title = h4s[0].textContent.split(': ')[1];
            let recipient = h4s[1].textContent.split(': ')[1];
            const liElement = document.createElement('li');
            const recipientSpanElement = document.createElement('span');
            recipientSpanElement.textContent = `To: ${recipient}`;
            const titleSpanElement = document.createElement('span');
            titleSpanElement.textContent = `Title: ${title}`;
            const divElement = document.createElement('div');
            divElement.classList.add('btn');
            const deleteBtnElementSentMails = document.createElement('button');
            deleteBtnElementSentMails.classList.add('delete');
            deleteBtnElementSentMails.textContent = 'Delete';
            deleteBtnElementSentMails.addEventListener('click', handleDelete);
            // append all elements
            liElement.appendChild(recipientSpanElement);
            liElement.appendChild(titleSpanElement);
            liElement.appendChild(divElement);
            divElement.appendChild(deleteBtnElementSentMails);
            ulElementSentList.appendChild(liElement);
            // remove parentLiElement
            parentLiElement.remove();
        });
        // add eventListener to the ['Delete] button
        deleteBtnElementListMails.addEventListener('click', handleDelete);

    });
    resetBtnElement.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('recipientName').value = '';
        document.getElementById('title').value = '';
        document.getElementById('message').value = '';
    });
    function handleDelete(e) {
        e.preventDefault();
        const parentLiElement = e.currentTarget.parentElement.parentElement;
        let children = parentLiElement.children
        let title = children.item(0).textContent.split(': ')[1];
        let recipient = children.item(1).textContent.split(': ')[1];
        const liElement = document.createElement('li');
        const recipientSpanElement = document.createElement('span');
        recipientSpanElement.textContent = `To: ${title}`;
        const titleSpanElement = document.createElement('span');
        titleSpanElement.textContent = `Title: ${recipient}`;
        liElement.appendChild(recipientSpanElement);
        liElement.appendChild(titleSpanElement);
        ulElementDeleteList.appendChild(liElement);
        parentLiElement.remove();
    }
}
solve()