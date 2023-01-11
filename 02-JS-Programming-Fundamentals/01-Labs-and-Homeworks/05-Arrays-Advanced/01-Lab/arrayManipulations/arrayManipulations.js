function arrayManipulations(array) {

    let arrayToManipulate = array[0];
    let lastNumber = 0;


    for (let i = 1; i < array.length; i++) {
        let currentElement = array[i];
        lastNumber = 


        
        let
            let [command, fistNumber, secondNumber] = array[i].split(' ');

        fistNumber = Number(fistNumber);
        secondNumber = Number(secondNumber);

        switch (command) {
            case "Add":
                break;
            case "Remove":
                break;
            case "RemoveAt":
                break;
            case "Insert":
                break;
        }
    }

    function addNumber(number) {
        arrayToManipulate.push(number);
    }

    function removeNumber(number) { }

    console.log(fistNumber);
    console.log(secondNumber);
}

arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']);