INSERT INTO department(id, department_name)
VALUES  (01, 'Marketing'),
        (02, 'Sales'),
        (03, 'Engineering'),
        (04, 'Legal');

INSERT INTO roles(id, department_id, role_name, salary)
VALUES  (01, 01, 'Graphic Designer', 50000),
        (02, 01, 'Marketing Analyzers', 60000),
        (03, 02, 'Closer', 50000),
        (04, 02, 'Appointment Maker', 70000),
        (05, 03, 'Programmer', 90000),
        (06, 03, 'Idea Maker', 100000),
        (07, 04, 'HR', 50000),
        (08, 04, 'Lawyer', 100000);
