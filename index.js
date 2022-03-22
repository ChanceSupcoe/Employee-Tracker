const mysql = require('mysql');
const inquirer = require('inquirer');
const fs = require('fs');
require('console.table');
const options = require('./inquirer/options');
const newDepartment = require('./inquirer/addDepartment');
const newRole = require('./inquirer/addRole');
const newEmployee = require('./inquirer/addEmployee');
const updateEmployee = require('./inquirer/updateEmployee');

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'rootroot',
    database: 'employees_db'
  },
  console.log(`Connected to the employees_db database.`)
);

runProgram();

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

const viewAllRoles = () => {
  const query = `SELECT * FROM employeeRole`
  db.query(query, (err, res) => {
  if (err) throw err
  console.table(res)
  runProgram()
  })
};

const viewAllEmployees = () => {
  const query = `SELECT * FROM employee`
  db.query(query, (err, res) => {
  if (err) throw err
  console.table(res)
  runProgram()
  })
};

const addDepartment = () => {
  inquirer.prompt(newDepartment)
  .then((data) => {
    db.query(`INSERT INTO department SET ?`,
    {
      departmentName: data.newDepartment
    },
    (err) =>{
      if(err) throw err;
      console.log('New Department Added')
      console.table(data)
      runProgram()
    })
  })
};

const addRole = () => {
  inquirer.prompt(newRole)
  .then((data) => {
    db.query(`INSERT INTO employeeRole SET ?`,
    {
      title: data.newRoleTitle,
      salary: data.newRoleSalary,
      department_id: data.newRoleDepartment
    },
    (err) =>{
      if(err) throw err;
      console.log('New Role Added')
      console.table(data)
      runProgram()
    })
  })
};

const addEmployee = () => {
  inquirer.prompt(newEmployee)
  .then((data) => {
    db.query(`INSERT INTO employee SET ?`,
    {
      first_name: data.newEmployeeFirstName,
      last_name: data.newEmployeeLastName,
      role_id: data.newEmployeeRole,
      manager_id: data.newEmployeeManager
    },
    (err) =>{
      if(err) throw err;
      console.log('New Employee Added')
      console.table(data)
      runProgram()
    })
  })
};

const updateEmployeeRole = () => {
  inquirer.prompt(updateEmployee)
  .then((data) => {
    const role_id= data.employeeUpdateRole;
    const  id= data.employeeID;
    db.query(`UPDATE employee SET role_id = ${role_id} WHERE id = ${id}`,
    
    (err) =>{
      if(err) throw err;
      console.log('Employee Role Updated')
      console.table(data)
      runProgram()
    })
  })
};




