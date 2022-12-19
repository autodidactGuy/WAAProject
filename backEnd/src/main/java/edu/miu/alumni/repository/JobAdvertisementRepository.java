package edu.miu.alumni.repository;

import edu.miu.alumni.entity.JobAdvertisement;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import  java.util.*;
@Repository
public interface JobAdvertisementRepository extends CrudRepository<JobAdvertisement,Long> {

//    public List<JobAdvertisement> filterJobByMultiCondition( tags,String stateCode,String cityName,String companyName);


    @Query(value = "SELECT * FROM job_advertisements c WHERE " +
            "(:companyName is null or c.company_name = :companyName) " +
            "and (:cityName is null or c.city_city_name = :cityName)" +
            "and (:stateCode is null or c.city_state_code = :stateCode)"
//            +
//            "and (:listTagId is null or c.id = at2.job_advertisement_id)"+
//            "and (:listTagId is null or at2.tags_id in :listTagId)"
            ,nativeQuery = true
    )
   public  ArrayList<JobAdvertisement> findByContidtions(
            String companyName,
            String cityName,
            String stateCode
//            List<Long> listTagId
    );
//        public  List<JobAdvertisement> findByCompanyNameOr

}
