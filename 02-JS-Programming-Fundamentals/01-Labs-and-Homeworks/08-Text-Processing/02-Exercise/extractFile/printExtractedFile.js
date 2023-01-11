function printExtractedFile(filePath) {
    const splittedFilePath = filePath.split('\\');
    const fileInfo = splittedFilePath.pop();
    const indexLastComma = fileInfo.lastIndexOf('.');
    const fileName = fileInfo.substring(0, indexLastComma);
    const fileExtension = fileInfo.substring(indexLastComma + 1);

    console.log(`File name: ${fileName}\nFile extension: ${fileExtension}`);
}

printExtractedFile('C:\\Internal\\training-internal\\template.bak.pptx');