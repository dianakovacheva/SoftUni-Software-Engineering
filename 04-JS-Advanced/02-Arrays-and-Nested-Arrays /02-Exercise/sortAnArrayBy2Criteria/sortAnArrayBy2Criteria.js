function sortAnArrayBy2Criteria(arr) {
    // Sort the array by 2 criteria: by a length in ascending order, and by alphabetical value in ascending order
    let sortedArr = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(sortedArr.join('\n'));
}

sortAnArrayBy2Criteria(['alpha',
    'beta',
    'gamma']
);
sortAnArrayBy2Criteria(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']
);
sortAnArrayBy2Criteria(['test',
    'Deny',
    'omen',
    'Default']
);