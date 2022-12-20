function fancyBarcodes(arr) {
    let barcodesCount = Number(arr.shift());
    let pattern = /(?<symbols>@#{1,})(?<string>[A-Z][A-Za-z0-9]{4,}[A-Z])\1/g;
    let digitsPattern = /\d+/g;
    let digitsProductGroup = "";

    for (let i = 0; i < barcodesCount; i++) {
        let barcode = arr[i];
        let match = pattern.exec(barcode);
        while (match !== null) {
            match = pattern.exec(barcode);
        }
    }

    console.log(`Product group: ${digitsProductGroup}`);
}

fancyBarcodes([
    "3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"
]);