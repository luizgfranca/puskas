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
    productId       integer references product(id),
    locationId      integer references location(id)
);

create table cart (
    id              integer primary key autoincrement,
    locationId      integer references location(id)
);

create table cart_item (
    id              integer primary key autoincrement,
    cartId          integer references cart(id),
    productId       integer references product(id),
    price           double default 0
);

create table customer (
    id              integer primary key autoincrement,
    name            varchar(4096) not null,
    document        varchar(14),
    email           varchar(256),
    phone           varchar(11)
);

create table address (
    id                      integer primary key autoincrement,
    postcode                varchar(256),
    street                  varchar(256),
    streetNumber            varchar(256),
    complement              varchar(256),
    city                    varchar(256),
    state                   varchar(256)
);

create table sales_order (
    id                      integer primary key autoincrement,
    customerId              integer references customer(id),
    cartId                  integer references cart(id),
    addressId               integer references address(id)
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
values 
    (1, 1), (1, 2), (1, 3), 
    (2, 1), (2, 2), (2, 3), 
    (3, 1), (3, 2), 
    (4, 1), (4, 2), (4, 3);