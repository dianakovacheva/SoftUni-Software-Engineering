function aMinerTask(arr) {
    let minerTaskObject = {};

    for (let i = 0; i < arr.length; i += 2) {
        let currentResource = arr[i];
        let currentQuantity = Number(arr[i + 1]);
        // Find out if the object includes the current resource
        if (!minerTaskObject.hasOwnProperty(currentResource)) {
            minerTaskObject[currentResource] = 0;
        }
        minerTaskObject[currentResource] += currentQuantity;
    }
    // Print the resources and their quantities in the format: {resource} –> {quantity}
    for (const key in minerTaskObject) {
        console.log(`${key} -> ${minerTaskObject[key]}`);
    }
}

aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]);