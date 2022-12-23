package edu.miu.alumni.repository;

import edu.miu.alumni.entity.UserApplication;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.*;

@Repository
public interface UserApplicationRepository extends CrudRepository<UserApplication, Long> {

    @Query(value = "SELECT * FROM user_application where is_deleted=false order by application_date desc limit 10" ,nativeQuery = true
    )
    public List<UserApplication> mostRecentAppliedJob10();

    @Query(value = "with extract_year_month_per_applied_ds as(\n" +
            "\tselect concat(date_part('year',application_date),'1', DATE_PART('month',application_date)) pub_year_month ,1 applied_count from user_application ua  " +
            ")select pub_year_month,sum(applied_count) from  extract_year_month_per_applied_ds group by pub_year_month",nativeQuery = true)
    Object[][] getAppliedJobNumberPerMonth();
}
