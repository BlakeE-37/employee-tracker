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
        console.log(results);
        init();
    });
};
function viewAllRoles() {
    db.query('SELECT roles.id, roles.role_name,  roles.salary, department.department_name FROM roles JOIN department ON roles.department_id = department.id', (err, results) => {
        console.log(results);
        init();
    });
}
function viewAllEmployees() {
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