insert into roles(id, is_deleted, name) values (1,false,'ADMIN');
insert into roles(id, is_deleted, name) values (2,false,'STUDENT');
insert into roles(id, is_deleted, name) values (3,false,'FACULTY');


INSERT INTO states(state,state_code) VALUES ('Alaska', 'AK');

INSERT INTO states(state,state_code) VALUES ('California', 'CA');
-- INSERT INTO states(state,state_code) VALUES ('Alabama', 'PR');
-- INSERT INTO states(state,state_code)  VALUES ('Colorado', 'CO');
--
-- insert into cities (city_name, state_code, zip_code, latitude, longitude)
-- VALUES ('Adjuntas', 'PR','USA','18.1788', '-66.7516', '00501');

insert into cities (city_name, state_code, zip_code, latitude, longitude)
VALUES ('West Hollywood', 'CA', '90069', '34.090573', '-118.378753');

insert into cities (city_name, state_code, zip_code, latitude, longitude)
VALUES ('Akiachak', 'AK', '03203', '34.090573', '-118.378753');

INSERT INTO users
(user_type, id, access_failed_count, birthday, email, first_name, gender, is_activated, is_deleted, is_lockout_end, last_name, nick_name, "password", phone_number, marjor, city_name, state_code, profile_id)
VALUES('Student', 2, 0, '2022-01-01', '111@gmail.com', 'user', 'male', true, false, true, 'lastname', 'nickname','$2a$10$DQUM8GNo2TmThxAHirwaGOf2tHld36A7y3aPIj.oE5VRFuJjaqq7K', '123', 'math', 'Akiachak', 'AK',null);