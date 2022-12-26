function reverseInPlace(array) {
    let result = "";

    for (let i = array.length; i > 0; i--) {
        result += `${array[i - 1]} `;
    }

    console.log(result);

}

reverseInPlace(['33', '123', '0', 'dd']);