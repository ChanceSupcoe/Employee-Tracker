const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');
const options = require('./inquirer/options');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
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

function viewAllDepartments() {
    db.query(`SELECT * FROM departments`, function (err, results) {
        console.table(results);
        console.log(table);
    });
};

runProgram();

