const inquirer = require('inquirer');
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'business_db',
    rowsAsArray: true
})

function viewAllDepartments() {
    db.query('SELECT * FROM department', (err, results) => {
        // convert array of array to an array of objects to better display in the console.table() -- saved to the data array
        var data = [];
        results.forEach(result => {
            let obj = { 'Department ID': result[0], 'Department Name': result[1] }
            data.push(obj)
        })
        // console.log(data)
        console.table(data);
        init();
    });
};
function viewAllRoles() {
    db.query('SELECT roles.id, roles.role_name,  roles.salary, department.department_name FROM roles JOIN department ON roles.department_id = department.id', (err, results) => {
        // convert array of array to an array of objects to better display in the console.table() -- saved to the data array
        var data = [];
        results.forEach(result => {
            let obj = { 'Role ID': result[0], 'Role Title': result[1], 'Salary': result[2], 'Department': result[3] }
            data.push(obj)
        })
        console.table(data);
        init();
    });
};
function viewAllEmployees() {
    db.query('SELECT employees.id, employees.first_name, employees.last_name, roles.role_name, department.department_name, roles.salary, managers.full_name FROM employees JOIN roles ON employees.role_id = roles.id JOIN managers ON roles.department_id = managers.department_id JOIN department ON managers.department_id = department.id', (err, results) => {
        // convert array of array to an array of objects to better display in the console.table() -- saved to the data array
        var data = [];
        results.forEach(result => {
            let obj = { 'Employee ID': result[0], 'First Name': result[1], 'Last Name': result[2], 'Role': result[3], 'Department': result[4], 'Salary': result[5], 'Manager': result[6] }
            data.push(obj)
        })
        console.table(data);
        init();
    });
};
function addDepartment() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the name of the new department?',
                name: 'newDepartment'
            }
        ]).then(response => {
            db.query(`INSERT INTO department (department_name) VALUES ("${response.newDepartment}")`, (err, results) => {
                if (err) throw err
            });
            console.log("\nNew department added succesfully.\n")
            init()
        })
}
function addRole() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the name of the new role?',
                name: 'roleName'
            },
            {
                type: 'input',
                message: 'What is the salary of the new role?',
                name: 'roleSalary'
            },
            {
                type: 'input',
                message: 'What department does this role belong to?',
                name: 'department'
            }
        ]).then(response => {
            // use the typed department name to get the department ID later
            db.query(`SELECT * FROM department WHERE department_name="${response.department}"`, (err, results) => {
                if (err) throw err;
                // retrieve the deparment ID
                let departmentID = results[0][0];

                // INSERT query with new role data
                db.query(`INSERT INTO roles (role_name, salary, department_id) VALUES ("${response.roleName}", ${response.roleSalary}, ${departmentID})`, (err, results) => {
                    if (err) throw err
                });
            });
            console.log("\nNew role added succesfully.\n")
            init()
        });
}
function addEmployee() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the employees first name?',
                name: 'fname'
            },
            {
                type: 'input',
                message: 'What is the employees last name?',
                name: 'lname'
            },
            {
                type: 'input',
                message: 'What is the employees role?',
                name: 'role'
            },
            {
                type: 'input',
                message: 'Who is the employees manager?',
                name: 'manager'
            }
        ]).then(response => {
            db.query(`SELECT * FROM roles WHERE role_name="${response.role}"`, (err, results) => {
                if (err) throw err;
                let roleID = results[0][0]
                db.query(`INSERT INTO employees (first_name, last_name, role_id) VALUES ("${response.fname}", "${response.lname}", ${roleID})`, (err, results) => {
                    if (err) throw err
                });
            });
            console.log("\nNew employee added succesfully.\n")
            init()
        });
};
function updateEmployeeRole() {
    db.query('SELECT * FROM employees', (err, results) => {
        // put all emplyee names and IDs in a list for the inquirer question
        let employeeList = [];
        results.forEach(employee => {
            let fullName = employee[1] + ' ' + employee[2]
            employeeList.push(fullName)
        });
        inquirer
            .prompt([
                {
                    type: 'list',
                    choices: employeeList,
                    message: 'What employee would you like to update?',
                    name: 'name'
                }
            ]).then(answer => {
                // re-split the full name for the database query
                let nameArray = answer.name.split(' ')
                let fname = nameArray[0];
                let lname = nameArray[1];

                db.query('', (err, results) => {

                })
            });
    });
}

function init() {
    inquirer
        .prompt([
            {
                type: 'list',
                choices: ['View all Departments', 'View all Roles', 'View all Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role'],
                message: 'What would you like to do?',
                name: 'question',
            }
        ])
        //use the answer to call the coresponding function
        .then((answer) => {
            switch (answer.question) {
                case 'View all Departments':
                    viewAllDepartments();
                    break;
                case 'View all Roles':
                    viewAllRoles();
                    break;
                case 'View all Employees':
                    viewAllEmployees();
                    break;
                case 'Add a Department':
                    addDepartment();
                    break;
                case 'Add a Role':
                    addRole();
                    break;
                case 'Add an Employee':
                    addEmployee();
                    break;
                case 'Update an Employee Role':
                    updateEmployeeRole();
                    break;
                default:
                    console.log(answer)
            };
        });
};

// initialize the app
init();