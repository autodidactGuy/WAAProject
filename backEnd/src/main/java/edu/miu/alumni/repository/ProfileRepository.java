package edu.miu.alumni.repository;

import edu.miu.alumni.entity.Profile;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.Entity;

@Repository
public interface ProfileRepository extends CrudRepository<Profile,Integer> {
}
