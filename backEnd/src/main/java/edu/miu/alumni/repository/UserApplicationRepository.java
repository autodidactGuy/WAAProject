package edu.miu.alumni.repository;

import edu.miu.alumni.entity.UserApplication;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.*;

@Repository
public interface UserApplicationRepository extends CrudRepository<UserApplication, Long> {

    @Query(value = "SELECT * FROM user_application order by application_date desc limit 10" ,nativeQuery = true
    )
    public List<UserApplication> mostRecentAppliedJob10();
}
