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
                viewAllDepts();
                break;
            case 'Add a department to the database':
                addDept();
                break;
            case 'View the current database of roles within the company':
                viewAllRoles();
                break;
            case 'Add a role to the database':
                addRole();
                break;
            case 'View all current employees':
                viewAllEmployees();
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