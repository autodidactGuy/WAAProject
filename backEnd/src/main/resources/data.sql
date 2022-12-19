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

INSERT INTO users
(user_type, id, access_failed_count, birthday, email, first_name, gender, is_activated, is_deleted, is_lockout_end, last_name, nick_name, "password", phone_number, marjor, city_name, state_code, profile_id)
VALUES('Student', 1, 0, '2022-01-01', '111@gmail.com', 'userabc', 'male', true, false, true, 'lastnameabc', 'nickname','$2a$10$DQUM8GNo2TmThxAHirwaGOf2tHld36A7y3aPIj.oE5VRFuJjaqq7K', '123', 'math', 'Akiachak', 'AK',null);



INSERT INTO profiles(id)
VALUES(1);

INSERT INTO job_experiences
(id, company_name, details, end_time, from_time, job_title, city_city_name, city_state_code, profile_id)
VALUES(0, 'abc', 'abc', pg_catalog.now() ,  pg_catalog.now(),
       'DE', 'Akiachak', 'AK', 1);

INSERT INTO public.job_advertisements
(id, company_name, contract, workload, description, is_deleted, profile, publication_date, city_city_name, city_state_code, poster_stu_id)
VALUES(1, 'ABC', 'miss li', 'balbalbal', 'balabala', false, '1111', pg_catalog.now(), 'Akiachak', 'AK', 1);

INSERT INTO public.job_advertisements
(id, company_name, contract, workload, description, is_deleted, profile, publication_date, city_city_name, city_state_code, poster_stu_id)
VALUES(2, 'ABCD', 'miss liA', 'balbalbal', 'balabala', false, '1111', pg_catalog.now(), 'Akiachak', 'AK', 2);

INSERT INTO public.tag
(id, is_deleted, title)
VALUES(1, false, 'java');


INSERT INTO public.tag
(id, is_deleted, title)
VALUES(2, false, 'c++');

INSERT INTO public.tag
(id, is_deleted, title)
VALUES(3, false, 'redis');

INSERT INTO public.advertisment_tags
(job_advertisement_id, tags_id)
VALUES(1, 1);
INSERT INTO public.advertisment_tags
(job_advertisement_id, tags_id)
VALUES(1, 2);

-- INSERT INTO public.advertisment_tags
-- (job_advertisement_id, tags_id)
-- VALUES(2, 2);
-- INSERT INTO public.advertisment_tags
-- (job_advertisement_id, tags_id)
-- VALUES(2, 1);