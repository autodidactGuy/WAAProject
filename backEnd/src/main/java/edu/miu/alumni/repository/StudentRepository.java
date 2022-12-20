package edu.miu.alumni.repository;

import edu.miu.alumni.entity.Student;
import edu.miu.alumni.model.echarts.StudentsNumberPerCity;
import edu.miu.alumni.model.echarts.StudentsNumberPerState;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

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
                "(:marjor is null or c.marjor = :marjor) " +
                "and (:cityName is null or c.city_name = :cityName)" +
                "and (:id is null or c.id = :id)"+
                "and (:stateCode is null or c.state_code = :stateCode)"+
                "and (:searchName is null or (c.first_name||c.last_name) like CONCAT('%',:searchName,'%'))" +
                "and (c.user_type='Student')",nativeQuery = true
        )
    public List<Student> getStudentsByFirstNameOrLastNameContainsAndMarjorEqualsAndCity_IdAndCityStateAndIdEquals(
            String marjor,
            String cityName,
            Long  id,
            String stateCode,
            String searchName
    );
//    List<StudentsNumberPerState> getStudentsNumberPerState();
//
//    List<StudentsNumberPerCity> getStudentsNumberPerCity(String stateCode);
//
}
