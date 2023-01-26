const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql2 = require('mysql2');

const PORT = process.env.PORT || 3001;
const db = mysql2.createConnection(
    {
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
)

db.connect(function(err){
    if(err) throw err;
    console.log(`Connected to port ${PORT}`);
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
    db.query("SELECT e.id as ID, e.first_name AS First, e.last_name AS Last, e.role_id AS Role, r.salary AS Salary, m.last_name AS Manager, d.dep_name AS Department FROM employee e LEFT JOIN employee m ON e.manager_id = m.id LEFT JOIN role r ON e.role_id = r.title LEFT JOIN department d ON r. department_id = d.id", function(err, result) {
        if (err) throw err;
        console.table(result);
        init();
    });
}

function viewRoles() {
    db.query("")
}

function viewDepts() {
    db.query('SELECT * FROM department', function(err, result) {
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
