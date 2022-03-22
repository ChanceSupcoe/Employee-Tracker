module.exports = [
    {
        type: "list",
        message: "What is the id of the employee you wish to update?",
        name: "employeeID",
        choices: ["1","2","3","4","5","6","7","8","9","10","11"],
    },
    {
        type: "list",
        message: "What is the new role of this employee?",
        choices: ["1","2","3","4","5","6","7","8","9","10","11"],
        name: "employeeUpdateRole",
    },
];