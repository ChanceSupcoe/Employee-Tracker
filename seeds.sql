INSERT INTO department (name)
VALUES ("Marketing"),
       ("Development"),
       ("Design"),
       ("Finance"),
       ("HR");

INSERT INTO role (title, salary, department_id)
VALUES ("Language SEO", 100,000, 1),
       ("Ads Assistant", 60,000, 1),
       ("Product Lead", 110,000, 2),
       ("App Development", 90,000, 2),
       ("Graphic Designer", 95,000, 3),
       ("Tax Assistant", 80,000, 4),
       ("HR Lead", 65,000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("John", "Bohnam", 3, 0),
        ("George", "Jungle", 4, 1),
        ("Aubrey", "Banks", 1, 1),
        ("Andrew", "Chase", 2, 3);

        

