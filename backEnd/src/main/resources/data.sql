insert into roles(id, is_deleted, name) values (1,false,'ADMIN');
insert into roles(id, is_deleted, name) values (2,false,'STUDENT');
insert into roles(id, is_deleted, name) values (3,false,'FACULTY');

-- insert into cities(zip_code, citi_name, county, latitude, longitude, state_code) VALUES (00001,)
insert into states(state_code, state) VALUES (1,'IOWA');
insert into cities(city_id, citi_name, county, latitude, longitude, zip_code, state_code)
values (1,'fairfield','USA',25.4,23.5,52557,1);
