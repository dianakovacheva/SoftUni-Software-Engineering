window.addEventListener("load", solve);
function solve() {
    const descriptionField = document.getElementById('description');
    const clientNameField = document.getElementById('client-name');
    const phoneNumberField = document.getElementById('client-phone');
    const sendFormBtn = document.querySelector('button[type="submit"]');
    const selectProductType = document.getElementById('type-product');
    const receivedOrdersSection = document.getElementById('received-orders');
    const completedOrdersSection = document.getElementById('completed-orders');
    const clearBtn = document.querySelector('.clear-btn');
    // add eventListener to the ["Send form"] button
    sendFormBtn.addEventListener('click', (e) => {
        const value = selectProductType.value;
        e.preventDefault();
        if (descriptionField.value !== '' && clientNameField.value !== '' && phoneNumberField.value !== '') {
            const divElement = document.createElement('div');
            divElement.classList.add('container');
            const h2Element = document.createElement('h2');
            h2Element.textContent = `Product type for repair: ${value}`;
            const h3Element = document.createElement('h3');
            h3Element.textContent = `Client information: ${clientNameField.value}, ${phoneNumberField.value}`;
            const h4Element = document.createElement('h4');
            h4Element.textContent = `Description of the problem: ${descriptionField.value}`;
            const startBtnElement = document.createElement('button');
            startBtnElement.classList.add('start-btn');
            startBtnElement.textContent = 'Start repair';
            const finishBtnElement = document.createElement('button');
            finishBtnElement.classList.add('finish-btn');
            finishBtnElement.textContent = 'Finish repair';
            finishBtnElement.disabled = true;
            divElement.appendChild(h2Element);
            divElement.appendChild(h3Element);
            divElement.appendChild(h4Element);
            divElement.appendChild(startBtnElement);
            divElement.appendChild(finishBtnElement);
            receivedOrdersSection.appendChild(divElement);
            // add eventListener to ["Start repair"] button
            startBtnElement.addEventListener('click', () => {
                startBtnElement.disabled = true;
                finishBtnElement.disabled = false;
            });
            // clear all input fields
            document.getElementById('description').value = '';
            document.getElementById('client-name').value = '';
            document.getElementById('client-phone').value = '';
            // add eventListener to the ["Finish repair"] button
            finishBtnElement.addEventListener('click', () => {
                const divElementFinishRepair = document.createElement('div');
                divElementFinishRepair.classList.add('container');
                divElementFinishRepair.appendChild(h2Element);
                divElementFinishRepair.appendChild(h3Element);
                divElementFinishRepair.appendChild(h4Element);
                completedOrdersSection.appendChild(divElementFinishRepair);
                divElement.remove();
                // add eventListener to the ["Clear"] button
                clearBtn.addEventListener('click', () => {
                    divElementFinishRepair.remove();
                });
            });
        };
    });
}