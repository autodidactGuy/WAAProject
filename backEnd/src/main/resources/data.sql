insert into roles(id, is_deleted, name) values (1,false,'ADMIN');
insert into roles(id, is_deleted, name) values (2,false,'STUDENT');
insert into roles(id, is_deleted, name) values (3,false,'FACULTY');


INSERT INTO states(state,state_code) VALUES ('Alaska', 'AK');

INSERT INTO states(state,state_code) VALUES ('California', 'CA');

insert into cities (city_name, state_code, zip_code, latitude, longitude)
VALUES ('West Hollywood', 'CA', '90069', '34.090573', '-118.378753');

insert into cities (city_name, state_code, zip_code, latitude, longitude)
VALUES ('Akiachak', 'AK', '03203', '34.090573', '-118.378753');
