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
