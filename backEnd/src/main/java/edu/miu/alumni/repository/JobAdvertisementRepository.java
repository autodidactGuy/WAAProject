package edu.miu.alumni.repository;

import edu.miu.alumni.entity.JobAdvertisement;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobAdvertisementRepository extends CrudRepository<JobAdvertisement,Long> {
}
