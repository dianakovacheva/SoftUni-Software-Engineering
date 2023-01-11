function furniture(arr) {
    let currentLine = arr.shift();
    let pattern = /[>]{2}(?<furnitureName>[A-Za-z]+)[<]{2}(?<price>(?:\d+|\d+\.\d+))\!(?<quantity>\d+)\b/g;
    let totalSpendMoney = 0;
    console.log('Bought furniture:');
    // Find all bought furniture
    while (currentLine !== 'Purchase') {
        let matches = currentLine.matchAll(pattern);
        for (const match of matches) {
            // Print each bought furniture on a separate line
            console.log(`${match.groups.furnitureName}`);
            // Calculate the total spend money
            totalSpendMoney += (match.groups.quantity * match.groups.price);
        }
        currentLine = arr.shift();
    }
    // Print the total spend money
    console.log(`Total money spend: ${totalSpendMoney.toFixed(2)}`);
}

furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']
);