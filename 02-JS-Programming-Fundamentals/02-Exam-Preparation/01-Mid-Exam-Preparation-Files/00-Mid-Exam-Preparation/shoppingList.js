function shoppingList(arr) {
    let productsList = arr.shift().split('!');
    let nextRow = arr.shift();

    while (nextRow !== "Go Shopping!") {
        let commandArray = nextRow.split(' ');
        let command = commandArray[0];
        let product = commandArray[1];
        let newProduct = commandArray[2];

        switch (command) {
            case "Urgent":
                if (!productsList.includes(product)) {
                    productsList.unshift(product);
                }
                break;
            case "Unnecessary":
                while (productsList.includes(product)) {
                    let index = productsList.indexOf(product);
                    productsList.splice(index, 1);
                }
                break;
            case "Correct":
                if (productsList.includes(product)) {
                    let index = productsList.indexOf(product);
                    productsList[index] = newProduct;
                }
                break;
            case "Rearrange":
                if (productsList.includes(product)) {
                    let index = productsList.indexOf(product);
                    let removedProduct = productsList.splice(index, 1);
                    productsList.push(removedProduct);
                }
                break;
        }
        nextRow = arr.shift();
    }

    console.log(productsList.join(', '));
}

shoppingList((["Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Go Shopping!"])
);