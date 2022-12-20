package edu.miu.alumni.repository;

import edu.miu.alumni.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import  java.util.*;
@Repository
public interface UserRepository extends CrudRepository<User,Long> {

    public User findUserByEmailEquals(String email);

    public List<User> findByRoleNameEquals(String roleName);

}
