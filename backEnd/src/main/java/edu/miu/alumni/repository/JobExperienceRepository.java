package edu.miu.alumni.repository;

import edu.miu.alumni.entity.JobExperience;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.criteria.CriteriaBuilder;

@Repository
public interface JobExperienceRepository extends CrudRepository<JobExperience,Long> {
}
