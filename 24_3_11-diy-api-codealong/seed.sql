DROP DATABASE IF EXISTS todos_db;

CREATE DATABASE todos_db;

\c todos_db

CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    title TEXT,
    done BOOLEAN
);

INSERT INTO todos (title, done)
    VALUES
        ('groceries', True),
        ('Eat Lunch', False),
        ('Code yer butt off', False),
        ('Office hours', False),
        ('Ride!!! (home?)', False),
        ('make dinner', False),
        ('enjoy family', False),
        ('Walk Dogs', False),
        ('Get to bed before midnight', False);

GRANT ALL PRIVILEGES ON DATABASE todos_db TO kingtor;
