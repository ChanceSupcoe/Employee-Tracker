INSERT INTO department(departmentName)
VALUES  ('Business Analyst'), 
        ('Software Development'), 
        ('Quality Analisis'), 
        ('HR'), 
        ('Legal'), 
        ('Product Management');

INSERT INTO employeeRole(title, salary, department_id)
VALUES  ('Business Analyst Lead', 125000, 1), 
        ('Analyst', 90000, 1), 
        ('Software Development Lead', 120000, 2), 
        ('Software Designer', 100000, 2), 
        ('Quality Analisis Lead', 122000, 3), 
        ('HR Lead', 80000, 4),
        ('Legal Team Lead', 100000, 5),
        ('Legal Assistant', 85000, 5),
        ('Head of Development', 200000, 6),
        ('Project Manager', 130000, 6);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES  ('James', 'Adams', 1, 9), 
        ('Mary', 'Baker', 2, 1), 
        ('Robert', 'Clark', 3, 9), 
        ('Patricia', 'Davis', 4, 3), 
        ('John', 'Evans', 5, 9), 
        ('Jennifer', 'Ghosh', 6, 5), 
        ('Michael', 'Hill', 7, 9), 
        ('Linda', 'Jones', 8, 7),
        ('William', 'Lopez', 9, null),
        ('Elizabeth', 'Patel', 10, 9);


-- Left join and inner joins to create view all table 
SELECT employee.id, employee.first_name, employee.last_name, employeeRole.title, department.departmentName, employeeRole.salary, CONCAT(manager.first_name,'', manager.last_name) AS manager
FROM employee 
LEFT JOIN employee manager ON manager.id = employee.manager_id
INNER JOIN employeeRole ON employee.role_id = employeeRole.id
INNER JOIN department ON department.id = employeeRole.department_id;

SELECT departmentName FROM department;

SELECT title FROM employeeRole
