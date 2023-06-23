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
}
function viewAllEmployees() {
    db.query('SELECT ')
    return
}
function addDepartment() {
    return
}
function addRole() {
    return
}
function addEmployee() {
    return
}
function updateEmployeeRole() {
    return
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