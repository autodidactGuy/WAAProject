package edu.miu.alumni.repository;

import edu.miu.alumni.entity.Education;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EducationRepository extends CrudRepository<Education,Long> {
}
