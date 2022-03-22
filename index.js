const mysql = require('mysql');
const inquirer = require('inquirer');
const fs = require('fs');
require('console.table');
const options = require('./inquirer/options');

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    port: 3301,
    password: 'TYLER08a!!',
    database: 'employees_db'
  },
  console.log(`Connected to the employees_db database.`)
);


function runProgram() {
    inquirer.prompt(options)
    .then(function(data){
    switch(data.runOptions){
        case "View All Departments" :
        viewAllDepartments();
        break;
        case "View All Roles" :
        viewAllRoles();
        break;
        case "View All Employees" :
        viewAllEmployees();
        break;
        case "Add A Department" :
        addDepartment();
        break;
        case "Add a Role" :
        addRole();
        break;
        case "Add An Employee" :
        addEmployee();
        break;
        case "Update An Employee Role" :
        updateEmployeeRole();
        break;
        };
    });
};

const viewAllDepartments = () => {
    const query = `SELECT * FROM department`
    db.query(query, (err, res) => {
    if (err) throw err
    console.table(res)
    runProgram()
    })
};

runProgram();
