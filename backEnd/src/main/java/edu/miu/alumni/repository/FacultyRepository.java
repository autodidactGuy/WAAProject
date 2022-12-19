package edu.miu.alumni.repository;

import edu.miu.alumni.entity.Faculty;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface    FacultyRepository extends CrudRepository<Faculty,Long> {
}
