-- Create a new database called 'todo('

CREATE database todo
CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR (255)
);