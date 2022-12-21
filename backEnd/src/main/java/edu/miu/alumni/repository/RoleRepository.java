package edu.miu.alumni.repository;

import edu.miu.alumni.entity.Role;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends CrudRepository<Role,Long> {

    public Role findRoleByName(String name);
}
