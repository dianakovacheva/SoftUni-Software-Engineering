function addAndRemove(arrayOfStrings) {

    let newArray = [];
    let numberToBePrinted = 0;

    for (let i = 0; i < arrayOfStrings.length; i++) {
        numberToBePrinted++;

        if (arrayOfStrings[i] === "add") {
            newArray.push(numberToBePrinted);
        } else if (arrayOfStrings[i] === "remove") {
            newArray.pop();
        }
    }

    if (newArray.length === 0) {
        console.log("Empty");
    } else {
        console.log(newArray.join(" "));
    }
}


addAndRemove(['remove', 'remove', 'remove']);