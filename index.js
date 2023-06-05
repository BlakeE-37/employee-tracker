const inquirer = require('inquirer');

function viewAllDepartments() {
    return
}
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
            };
        });
};

// initialize the app
init();