function solution() {
    const storeObj = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }
    const recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2,
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20,
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3,
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1,
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10,
        }
    }

    const inputHandler = function (input) {
        let [command, microElement, quantity] = input.split(' ');
        quantity = Number(quantity);
        switch (command) {
            case 'restock':
                storeObj[microElement] += quantity;
                return 'Success';
            case 'prepare':
                let error = false;
                let notFoundIngredient;
                for (const ingredient in recipes[microElement]) {
                    error = false;
                    notFoundIngredient = '';
                    if (storeObj[ingredient] < recipes[microElement][ingredient] * quantity) {
                        error = true;
                        notFoundIngredient = ingredient;
                        break;
                    }
                }
                if (error) {
                    return `Error: not enough ${notFoundIngredient} in stock`;
                } else {
                    for (const ingredient in recipes[microElement]) {
                        storeObj[ingredient] -= recipes[microElement][ingredient] * quantity;
                    }
                    return 'Success';
                }
            case 'report':
                let reportResult = '';
                for (const key in storeObj) {
                    reportResult += `${key}=${storeObj[key]} `;
                }
                reportResult = reportResult.slice(0, -1);
                return reportResult;
        }
    }
    return inputHandler;
}

let manager = solution();
console.log((manager('prepare turkey 1')));
console.log((manager('restock protein 10')));
console.log((manager('prepare turkey 1')));
console.log((manager('restock carbohydrate 10')));
console.log((manager('prepare turkey 1')));
console.log((manager('restock fat 10')));
console.log((manager('prepare turkey 1')));
console.log((manager('restock flavour 10')));
console.log((manager('prepare turkey 1')));
console.log((manager('report')));

// solution(
//     'restock flavour 50',
//     'prepare lemonade 4',
//     'restock carbohydrate 10',
//     'restock flavour 10',
//     'prepare apple 1',
//     'restock fat 10',
//     'prepare burger 1',
//     'report'
// );

// solution(
//     'prepare turkey 1',
//     'restock protein 10',
//     'prepare turkey 1',
//     'restock carbohydrate 10',
//     'prepare turkey 1',
//     'restock fat 10',
//     'prepare turkey 1',
//     'restock flavour 10',
//     'prepare turkey 1',
//     'report'
// );



