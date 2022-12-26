function companyUsers(arr) {
    let companiesObject = {};
    arr.forEach(currentLine => {
        let [companyName, employeeID] = currentLine.split(' -> ');
        if (!companiesObject.hasOwnProperty(companyName)) {
            companiesObject[companyName] = [];
        }
        companiesObject[companyName].push(employeeID);
    });
    // Sort the company names
    let sortedCompanyNames = Object.entries(companiesObject).sort((a, b) => a[0].localeCompare(b[0]));
    for (const [companyName, employeeID] of sortedCompanyNames) {
        console.log(companyName);
        let uniqueEmployeeIDs = new Set(employeeID);
        for (const currentID of uniqueEmployeeIDs) {
            console.log(`-- ${currentID}`);
        }
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]);