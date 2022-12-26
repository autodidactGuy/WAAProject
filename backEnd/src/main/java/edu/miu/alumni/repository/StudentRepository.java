package edu.miu.alumni.repository;

import edu.miu.alumni.entity.Faculty;
import edu.miu.alumni.entity.Student;
import edu.miu.alumni.model.echarts.StudentsNumberPerCity;
import edu.miu.alumni.model.echarts.StudentsNumberPerState;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface StudentRepository extends CrudRepository<Student,Long> {

//    @Query("SELECT c FROM Customer c WHERE (:name is null or c.name = :name) and (:email is null"
//            + " or c.email = :email)")
//    public List<Student> getStudentsByFirstNameOrLastNameContainsAndMarjorEqualsAndIdAndCity_IdAndCityState(
//            String searchName1,
//            String searchName2,
//            String marjor,
//            long studentid,
//            String cityState,
//            String aaa
//    );

        @Query(value = "SELECT *  FROM users c WHERE " +
                "(:major is null or c.major = :major) " +
                "and (:cityName is null or c.city_name = :cityName)" +
                "and (:id is null or c.id = :id)"+
                "and (:stateCode is null or c.state_code = :stateCode)"+
                "and (:searchName is null or (c.first_name||c.last_name) like CONCAT('%',:searchName,'%'))" +
                "and (c.user_type='Student')",nativeQuery = true
        )
    public List<Student> getStudentsByFirstNameOrLastNameContainsAndMarjorEqualsAndCity_IdAndCityStateAndIdEquals(
            String major,
            String cityName,
            Long  id,
            String stateCode,
            String searchName
    );



    /**
     * Number of student per state
     * @return
     */
    @Query(value = "SELECT new edu.miu.alumni.model.echarts.StudentsNumberPerState(s.city.id.stateCode,count(*))" +
            " FROM Student AS s " +
            "GROUP BY  s.city.id.stateCode"
    )
    List<StudentsNumberPerState> getStudentsNumberPerState();

    /**
     * Number of student per city
     * @return
     */
    @Query(value = "SELECT new edu.miu.alumni.model.echarts.StudentsNumberPerCity(s.city.id.cityName,count(*))" +
            " FROM Student AS s " +
            "where s.city.id.stateCode=:stateCode " +
            "GROUP BY  s.city.id.cityName"
    )
    List<StudentsNumberPerCity> getStudentsNumberPerCity(String stateCode);

    @Transactional
    @Modifying
    @Query(value = "UPDATE users  set major=?1 where id=?2", nativeQuery = true)
    void setMajor(String major, Long iduser);


    Student findStudentByEmailEquals(String facultyEmail);


    @Query(value ="select gender,count(1) from users \n" +
            "where user_type  = 'Student' and is_deleted = false\n" +
            "group by gender ",nativeQuery = true )
    Object[][] getStudentByGender();

    @Query(value = "select extract(year  from AGE(to_timestamp(birthday, 'YYYY-MM-DD')))  ages,count(1) from users\n" +
            "where user_type  = 'Student'\n" +
            "group by  extract(year  from AGE(to_timestamp(birthday, 'YYYY-MM-DD')))  ;",nativeQuery = true)
    Object[][] getNumOfStuPerAge();
}
