const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql2 = require('mysql2');
console.log()
const db = mysql2.createConnection(
    {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'company_db'
    })

db.connect(function(err){
    if(err) throw err;
    console.log(`Connected`);
    //Initialize application
    init();
})

function init() {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'start',
            message: 'Welcome to the SQL employee tracker. How can I help you today?',
            choices: [
                'View all departments',
                'Add a department to the database',
                'View the current database of roles within the company',
                'Add a role to the database',
                'View all current employees',
                'Add an employee to the database',
                'Update the role of an employee within the database',
                'Exit the application'
            ]
        }
    ]).then(function(res) {
        switch(res.start) {
            case 'View all departments':
                viewDepts();
                break;
            case 'Add a department to the database':
                addDept();
                break;
            case 'View the current database of roles within the company':
                viewRoles();
                break;
            case 'Add a role to the database':
                addRole();
                break;
            case 'View all current employees':
                viewEmployees();
                break;
            case 'Add an employee to the database':
                addEmployee();
                break;
            case 'Update the role of an employee within the database':
                updateEmployeeRole();
                break;
            default:
                console.log('Default response');
        }
    })
}

//VIEW functions located below

function viewEmployees() {
    db.query(`SELECT id AS ID, first_name AS First, last_name AS Last FROM employee;`, function(err, result) {
        if (err) throw err;
        console.table(result);
        init();
    });
}

function viewRoles() {
    db.query(`SELECT id AS ID, title AS Title, salary AS Salary FROM role, 
    SELECT department.id, department.dep_name, role.department_id
    FROM department
    LEFT JOIN role ON department.id = role.department_id`, function(err, result) 
    {
        if(err) throw(err);
        console.table(result);
        init();

    })
}

function viewDepts() {
    db.query(`SELECT id AS ID, dep_name AS Department FROM department`, function(err, result) {
        if(err) throw(err);
        console.table(result);
        init();

    })
}

//ADD functions located below
function addEmployee() {

}

function addRole() {

}

function addDept() {

}

//UPDATE function located below

function updateEmployeeRole() {

}
