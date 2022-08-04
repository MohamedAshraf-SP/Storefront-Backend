create table users (
    id SERIAL PRIMARY KEY,
    fristName varchar(50) NOT NULL,
    lastName varchar(50),
    password varchar(100) NOT NULL
);