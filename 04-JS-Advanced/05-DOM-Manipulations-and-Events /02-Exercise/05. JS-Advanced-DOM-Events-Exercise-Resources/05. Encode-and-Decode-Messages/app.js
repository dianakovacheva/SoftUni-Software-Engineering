function encodeAndDecodeMessages() {
    const textareaElements = Array.from(document.querySelectorAll('div textarea'));
    const [inputMessage, receivedMessage] = textareaElements;
    const btnElements = Array.from(document.querySelectorAll('div button'));
    const [encodeSendBtn, decodeReadBtn] = btnElements;

    // add event listener to encodeSendBtn
    encodeSendBtn.addEventListener('click', e => {
        let charASCIIValues = [];
        if (inputMessage.value !== '') {
            const inputMessageValue = inputMessage.value;
            for (const char of inputMessageValue) {
                // collect each ASCII values + 1 of all chars from the input text
                const currentASCIICode = char.charCodeAt() + 1;
                const newChar = String.fromCharCode(currentASCIICode);
                charASCIIValues.push(newChar);
                document.querySelector('div textarea').value = '';
            }
        }
        receivedMessage.value = charASCIIValues.join('');
    });
    // add event listener to decodeReadBtn
    decodeReadBtn.addEventListener('click', e => {
        let result = [];
        const receivedMessageValue = receivedMessage.value;
        for (const char of receivedMessageValue) {
            // collect each ASCII values + 1 of all chars from the input text
            const currentASCIICode = char.charCodeAt() - 1;
            const newChar = String.fromCharCode(currentASCIICode);
            result.push(newChar);
        }
        receivedMessage.value = result.join('');
    });
}