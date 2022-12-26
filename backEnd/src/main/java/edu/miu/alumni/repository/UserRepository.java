package edu.miu.alumni.repository;

import edu.miu.alumni.entity.User;
import edu.miu.alumni.model.echarts.StudentsNumberPerCity;
import edu.miu.alumni.model.echarts.StudentsNumberPerState;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import  java.util.*;
@Repository
public interface UserRepository extends CrudRepository<User,Long> {

    public User findUserByEmailEquals(String email);

    public List<User> findByRoleNameEquals(String roleName);
    @Modifying
    @Query(value = "INSERT INTO tag_intersted_in_users(intersted_tags_id, intersted_in_users_id) VALUES (:tagId,:userId)",nativeQuery = true)
    @Transactional
    Integer  subscribeTags(Long userId,Long tagId);

    @Query(value = "SELECT *  FROM users c WHERE " +
            "(:major is null or c.major = :major) " +
            "and (:cityName is null or c.city_name = :cityName)" +
            "and (:id is null or c.id = :id)"+
            "and (:stateCode is null or c.state_code = :stateCode)"+
            "and (:searchName is null or (c.first_name||c.last_name) like CONCAT('%',:searchName,'%'))" +
            "and (c.user_type='Student' or c.user_type='Faculty')",nativeQuery = true
    )
    public List<User> getStudentsFacultyByFirstNameOrLastNameContainsAndMarjorEqualsAndCity_IdAndCityStateAndIdEquals(
            String major,
            String cityName,
            Long  id,
            String stateCode,
            String searchName
    );
    @Modifying
    @Query(value = "DELETE FROM tag_intersted_in_users WHERE intersted_in_users_id = :userId",nativeQuery = true)
    @Transactional
    Integer  deleteTags(Long userId);




}
