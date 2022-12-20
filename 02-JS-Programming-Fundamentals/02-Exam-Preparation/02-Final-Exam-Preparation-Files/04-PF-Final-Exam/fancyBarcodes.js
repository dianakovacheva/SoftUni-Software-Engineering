function fancyBarcodes(arr) {
    let numOfBarcodes = Number(arr.shift());
    let barcodes = arr.slice();
    // Barcode Regexp
    let validBarcodePattern = /(@#{1,})(?<barcode>[A-Z][A-Za-z0-9]{4,}[A-Z])(@#{1,})/;
    // Iterate through all given barcodes
    for (let i = 0; i < numOfBarcodes; i++) {
        let currentBarcode = barcodes[i];
        let match = validBarcodePattern.exec(currentBarcode);
        let productGroup = '';
        let isValid = false;
        // If the current barcode matches our regExp pattern, set the value of isValid to true
        if (match) {
            isValid = true;
            let barcodeText = match[2];
            // Find out if the barcodeText includes any digits
            for (const currentCharacter of barcodeText) {
                if (!isNaN(Number(currentCharacter))) {
                    productGroup += currentCharacter;
                }
            }
        }
        if (isValid) {
            productGroup = productGroup !== '' ? productGroup : '00';
            console.log(`Product group: ${productGroup}`);
        } else {
            console.log('Invalid barcode');
        }
    }
}

fancyBarcodes(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"]);