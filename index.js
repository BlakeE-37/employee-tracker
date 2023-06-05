const inquirer = require('inquirer');



function viewAllRoles() {
    return
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
                name: 'title',
            }
        ])
        //use the answer to call the coresponding function
        .then((answer) => {
            switch (answer) {
                case 'View all Departments':
                    return
                case 'View all Roles':
                    return
                case 'View all Employees':
                    return
                case 'Add a Department':
                    return
                case 'Add a Role':
                    return
                case 'Add an Employee':
                    return
                case 'Update an Employee Role':
                    return
            };
        });
};

// initialize the app
init();