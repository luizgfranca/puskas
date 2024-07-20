create table product (
    id              integer primary key autoincrement,
    primaryTitle    varchar(256),
    secondaryTitle  varchar(256),
    price           double
);



create table location (
    id              integer primary key autoincrement,
    name            varchar(255),
    acronym         varchar(255)
); 

create table rel_product_available_in_location (
    id              integer primary key autoincrement,
    productId      integer references product(id),
    locationId     integer references location(id)
);



/* TEST DATA */

insert into product (primaryTitle, secondaryTitle, price) values ('Banda Larga', '300 MEGA', 89.90);
insert into product (primaryTitle, secondaryTitle, price) values ('Banda Larga', '600 MEGA', 109.90);
insert into product (primaryTitle, secondaryTitle, price) values ('Banda Larga', '1 GIGA', 129.90);
insert into product (primaryTitle, secondaryTitle, price) values ('Celular', '15GB', 44.90);

insert into location (name, acronym) values ('Santa Monica - Uberlândia', 'uberlandia-santa_monica');
insert into location (name, acronym) values ('Roosevelt - Uberlândia', 'uberlandia-roosevelt');
insert into location (name, acronym) values ('Saraiva - Uberlândia', 'uberlandia-saraiva');

insert into rel_product_available_in_location (productId, locationId) 
values (1, 1), (1, 2), (1, 3), (2, 1), (2, 2), (2, 3), (3, 1), (3, 2), (4, 1), (4, 2), (4, 3);