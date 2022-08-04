create table orders (
    id SERIAL PRIMARY KEY,
    name varchar(100) NOT NULL,
    status VARCHAR(20) NOT NULL,
    date date,
    user_id SERIAL  REFERENCES users(id),
    product_id SERIAL REFERENCES products(id)
);