module.exports = [
    {
        type: "input",
        name: "newEmployeeFirstName",
        message: "What is the first name of the employee you wish to add?",
    },
    {
        type: "input",
        name: "newEmployeeLastName",
        message: "What is the last name of the employee you wish to add?",
    },
    {
        type: "list",
        name: "newEmployeeRole",
        message: "What is the role of the employee you wish to add?",
        choices: ["1","2","3","4","5","6","7","8","9","10","11"],
    },
    {
        type: "list",
        name: "newEmployeeManager",
        message: "What is the id of the new employees manager?",
        choices: ["1","2","3","4","5","6","7","8","9","10","11"],
    },
];

