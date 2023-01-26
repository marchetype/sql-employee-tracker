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
                'View all roles',
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
            case 'View all roles':
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
    db.query(
        `SELECT employee.id AS ID, 
        first_name AS First, 
        last_name AS Last,
        role.title AS Title
        FROM employee
        LEFT JOIN role
        ON employee.role_id = role.id`, function(err, result) {
        if (err) throw err;
        console.table(result);
        init();
    });
}

function viewRoles() {
    db.query(
        `SELECT role.id AS ID, 
        title AS Title, 
        salary AS Salary, 
        department.dep_name AS Department
        FROM role 
        LEFT JOIN department 
        ON role.department_id = department.id`, function(err, result) 
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
    inquirer
    .prompt([
        {
            name: 'first_name',
            type: 'input',
            message: 'Please input the first name of the employee being added:'
        },
        {
            name: 'last_name',
            type: 'input',
            message: 'Please input the last name of the employee being added:'
        },
        {
            name: 'role_id',
            type: 'input',
            message: 'Please input the role ID number for the specified employee:'
        },
        {
            name: 'manager_id',
            type: 'input',
            message: 'Please input the manager id number for the specified employee:'
        }
    ]).then(function(answer) {
        db.query('INSERT INTO employee SET ?',
        {
            first_name: answer.first_name,
            last_name: answer.last_name,
            role_id: answer.role_id,
            manager_id: answer.manager_id
        },
        function(err){
            if (err) throw err;
            console.log('Employee has been added to the database!');
            init();
        })
    })
}

function addRole() {
    inquirer
    .prompt([
        {
            name: 'title',
            type: 'input',
            message: 'Please input the title of the role being added:'
        },
        {
            name: 'salary',
            type: 'input',
            message: 'Please input the salary for the specified role:'
        },
        {
            name: 'id',
            type: 'input',
            message: 'Please input the department ID number for the specified role:'
        }
    ]).then(function(answer) {
        db.query('INSERT INTO role SET ?',
        {
            title: answer.title,
            salary: answer.salary,
            department_id: answer.id
        },
        function(err){
            if (err) throw err;
            console.log('Role has been added!');
            init();
        })
    })
}

function addDept() {
    inquirer
    .prompt([
        {
            name: 'department',
            type: 'input',
            message: 'Please input the name of the department being added:'
        }
    ]).then(function(answer) {
        db.query('INSERT INTO department VALUES (DEFAULT, ?)', [answer.department],
        function(err){
            if (err) throw err;
            console.log('Department has been added!');
            init();
        })
    })

}

//UPDATE function located below

function updateEmployeeRole() {

}
