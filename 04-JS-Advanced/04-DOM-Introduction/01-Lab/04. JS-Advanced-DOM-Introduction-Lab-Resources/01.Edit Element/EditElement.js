function editElement(reference, match, replacer) {
    let textToReplace = reference.textContent;
    let pattern = new RegExp(match, 'g');
    let replacedText = textToReplace.replace(pattern, replacer);
    reference.textContent = replacedText;
}