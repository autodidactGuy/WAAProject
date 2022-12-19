package edu.miu.alumni.repository;

import edu.miu.alumni.entity.JobAdvertisement;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import  java.util.*;
@Repository
public interface JobAdvertisementRepository extends CrudRepository<JobAdvertisement,Long> {

//    public List<JobAdvertisement> filterJobByMultiCondition(String tags,String stateCode,String cityName,String companyName);
}
