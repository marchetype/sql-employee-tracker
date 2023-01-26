-- INSERTing values for department TABLE
INSERT INTO department(name)
VALUES 
    ('Sales'),
    ('Customer Service'),
    ('Accounting'),
    ('Quality Assurance'),
    ('HR'),
    ('Warehouse');


-- INSERTing values for role TABLE
INSERT INTO role(title, salary, department_id)
VALUES 
    ('Salesperson', 30000, 1), 
    ('Customer Service Representative', 38500, 2), 
    ('Accountant', 40000, 3), 
    ('Quality Assurance Representative', 35000, 4),
    ('Head of Human Resources', 37000, 5),
    ('Warehouse Manager', 45000, 6);


-- INSERTing values for employee TABLE
INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
    ('Dwight', 'Schrute', 1, 1),
    ('Jim', 'Halpert', 1, 1),
    ('Kelly', 'Kapoor', 2, 1),
    ('Oscar', 'Martinez', 3, 1),
    ('Creed', 'Bratton', 4, 1),
    ('Toby', 'Flenderson', 5, 1),
    ('Darryl', 'Philbin', 6, null);
    
