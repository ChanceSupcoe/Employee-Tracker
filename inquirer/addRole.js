module.exports = [
    {
        type: "input",
        name: "newRoleTitle",
        message: "What is the name of the role you wish to add?",
    },
    {
        type: "input",
        name: "newRoleSalary",
        message: "What is the salary of the role?",
    },
    {
        type: "list",
        name: "newRoleDepartment",
        message: "What is the name of the department this role will be in?",
        choices: ["1", "2", "3", "4", "5", "6", "7"]
    }
];

