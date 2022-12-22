package edu.miu.alumni.repository;

import edu.miu.alumni.entity.Validate;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface ValidateRepository extends CrudRepository<Validate,Long> {

    Validate findByResetToken(String  aLong);
}
