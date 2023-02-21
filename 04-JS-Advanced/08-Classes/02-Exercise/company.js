class Company {
    constructor() {
        this.departments = {};
    }
    addEmployee(name, salary, position, department) {
        if (!name || !salary || !position || !department || salary < 0) {
            throw Error('Invalid input!');
        }
        if (!this.departments[department]) {
            this.departments[department] = {
                avgSalary: 0,
                sumSalaries: 0,
                employees: [],
            };
        }
        this.departments[department].employees.push({ name, salary, position });
        this._updateDepartmentValues(this.departments[department], salary);
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }
    _updateDepartmentValues(department, salary) {
        department.sumSalaries += Number(salary);
        department.averageSalary = department.sumSalaries / department.employees.length;
    }
    bestDepartment() {
        let bestDepart = Object.entries(this.departments)
            .sort(([depNameOne, depInfoOne], [depNameTwo, depInfoTwo]) => {
                return depInfoTwo.averageSalary - depInfoOne.averageSalary;
            })[0];
        let sortEmployees = bestDepart[1].employees.sort((a, b) => {
            return b.salary - a.salary || (a.name.localeCompare(b.name));
        })
        let temp = `Best Department is: ${bestDepart[0]}\n`;
        temp += `Average salary: ${bestDepart[1].averageSalary.toFixed(2)}\n`;
        for (let i = 0; i < sortEmployees.length; i++) {
            const employee = sortEmployees[i];
            temp += `${employee.name} ${employee.salary} ${employee.position}`;
            temp += i === sortEmployees.length - 1 ? '' : '\n';
        }
        return temp;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
console.log(c.addEmployee("Stanimir", 2000, "engineer", "Construction"));