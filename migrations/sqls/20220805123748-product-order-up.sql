create table product_order (
    id SERIAL PRIMARY KEY,
    order_id SERIAL  REFERENCES orders(id),
    product_id SERIAL REFERENCES products(id)
);