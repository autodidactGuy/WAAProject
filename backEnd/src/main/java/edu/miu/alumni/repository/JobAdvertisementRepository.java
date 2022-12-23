package edu.miu.alumni.repository;

import edu.miu.alumni.entity.JobAdvertisement;
import edu.miu.alumni.model.echarts.AdertisementsPerTag;
import edu.miu.alumni.model.echarts.JobAdvertisementsPerLocation;
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
            ,nativeQuery = true
    )
   public  ArrayList<JobAdvertisement> findByContidtions(
            String companyName,
            String cityName,
            String stateCode
//            List<Long> listTagId
    );

    @Query(value = "SELECT * FROM job_advertisements c WHERE " +
            " c.poster_stu_id  = :postUserId" ,nativeQuery = true
    )
    public List<JobAdvertisement> getAllByPoster(Long postUserId);

    @Query(value = "SELECT * FROM job_advertisements order by publication_date desc limit 10" ,nativeQuery = true
    )
    public List<JobAdvertisement> findTop10JobAd();


    /**
     * Number of job advertisements per location.
     * @return
     */
    @Query(value = "SELECT new edu.miu.alumni.model.echarts.JobAdvertisementsPerLocation(s.city.id.cityName,s.city.id.stateCode,count(*))" +
            " FROM JobAdvertisement AS s " +
            "GROUP BY  s.city.id.cityName,s.city.id.stateCode"
    )
    public List<JobAdvertisementsPerLocation> getJobAdvertisementPerLocation();

    @Query(value = "with extract_year_month_per_ad as(\n" +
            "\tselect concat(date_part('year',publication_date),'1', DATE_PART('month',publication_date)) pub_year_month ,1 ja_count from job_advertisements ja\n" +
            ")select pub_year_month,sum(ja_count) from  extract_year_month_per_ad group by pub_year_month",nativeQuery = true)
    Object[][] getAdsPerMonth();


}
