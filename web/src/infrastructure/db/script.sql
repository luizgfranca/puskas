create table product (
    id              integer primary key autoincrement,
    primaryTitle    varchar(256),
    secondaryTitle  varchar(256),
    price           double
);



create table location (
    id              integer primary key autoincrement,
    name            varchar(255)
); 

create table rel_product_available_in_location (
    id              integer primary key autoincrement,
    product_id      integer references product(id),
    location_id      integer references location(id)
);



/* TEST DATA */

insert into product (primaryTitle, secondaryTitle, price) values ('Banda Larga', '300 MEGA', 89.90);
insert into product (primaryTitle, secondaryTitle, price) values ('Banda Larga', '600 MEGA', 109.90);
insert into product (primaryTitle, secondaryTitle, price) values ('Banda Larga', '1 GIGA', 129.90);
insert into product (primaryTitle, secondaryTitle, price) values ('Celular', '15GB', 44.90);

insert into location (name) values ('Santa Monica - Uberlândia');
insert into location (name) values ('Roosevelt - Uberlândia');
insert into location (name) values ('Saraiva - Uberlândia');