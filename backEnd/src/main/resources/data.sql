insert into roles(id, is_deleted, name) values (1,false,'ADMIN');
insert into roles(id, is_deleted, name) values (2,false,'STUDENT');
insert into roles(id, is_deleted, name) values (3,false,'FACULTY');


INSERT INTO states(state,state_code) VALUES ('California', 'CA');
-- INSERT INTO states(state,state_code) VALUES ('Alabama', 'PR');
-- INSERT INTO states(state,state_code)  VALUES ('Colorado', 'CO');
--
-- insert into cities (city_name, state_code, zip_code, latitude, longitude)
-- VALUES ('Adjuntas', 'PR','USA','18.1788', '-66.7516', '00501');

insert into cities (city_name, state_code, zip_code, latitude, longitude)
VALUES ('West Hollywood', 'CA', '90069', '34.090573', '-118.378753');
