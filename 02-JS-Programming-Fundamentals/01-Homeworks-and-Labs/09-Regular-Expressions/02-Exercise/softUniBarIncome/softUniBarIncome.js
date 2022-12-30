function softUniBarIncome(arr) {
    let currentLine = arr.shift();
    let pattern = /%(?<customerName>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.\d]*(?<price>\d+[.]*[\d]*)\$/g;
    let totalIncome = 0;
    while (currentLine !== 'end of shift') {
        const matches = currentLine.matchAll(pattern);
        let totalPrice = 0;
        for (const match of matches) {
            let productCount = match.groups.count;
            let productPrice = match.groups.price;
            totalPrice += productCount * productPrice;
            totalIncome += totalPrice;
            console.log(`${match.groups.customerName}: ${match.groups.product} - ${totalPrice.toFixed(2)}`);
        }
        currentLine = arr.shift();
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift']
);