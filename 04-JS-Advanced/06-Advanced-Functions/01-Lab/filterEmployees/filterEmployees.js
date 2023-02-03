function filterEmployees(employeesData, crirteria) {
    const employeesArray = JSON.parse(employeesData);
    const [gender, value] = crirteria.split('-');
    function printLine(employee, index) {
        console.log(`${index}. ${employee.first_name} ${employee.last_name} - ${employee.email}`);
    }
    if (crirteria === 'all') {
        employeesArray.map((employee, index) => printLine(employee, index))
    } else {
        employeesArray.filter(employee => employee[gender] == value)
            .map((employee, index) => printLine(employee, index))
    }
};

filterEmployees(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
    'last_name-Johnson')