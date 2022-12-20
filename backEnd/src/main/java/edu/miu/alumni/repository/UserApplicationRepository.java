package edu.miu.alumni.repository;

import edu.miu.alumni.entity.UserApplication;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserApplicationRepository extends CrudRepository<UserApplication, Long> {
}
