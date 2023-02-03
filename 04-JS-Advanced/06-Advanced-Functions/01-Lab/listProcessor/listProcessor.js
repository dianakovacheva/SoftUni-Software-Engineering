function listProcessor(arrayOfStrings) {
    let resultArray = [];
    const commands = {
        add: word => resultArray.push(word),
        remove: word => {
            while (resultArray.includes(word)) {
                let index = resultArray.indexOf(word);
                resultArray.splice(index, 1);
            }
        },
        print: () => console.log(resultArray.join(',')),
    }
    arrayOfStrings.forEach(string => {
        let [command, word] = string.split(' ');
        commands[command](word);
    });
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter', 'remove george', 'print']);