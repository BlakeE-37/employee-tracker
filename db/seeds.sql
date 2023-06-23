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

INSERT INTO employees(id, first_name, last_name, role_id)
VALUES  (01, 'John', 'Doe', 01),
        (02, 'Blake', 'Evan', 06),
        (03, 'Tim', 'Smith', 02),
        (04, 'Hugh', 'Mungus', 03),
        (05, 'Jack', 'Pot', 05),
        (06, 'Stan', 'Dupp', 04),
        (07, 'Lorne', 'Mowers', 08),
        (08, 'Philipa', 'Bucket', 07),
        (09, 'Ella', 'Vader', 07);

INSERT INTO managers(id, full_name, department_id)
VALUES  (01, 'Luke Skywalker', 01),
        (02, 'Jim Halpert', 02),
        (03, 'Harry Potter', 03),
        (04, 'Bilbo Baggins', 04);