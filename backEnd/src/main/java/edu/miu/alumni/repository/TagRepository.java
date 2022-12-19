package edu.miu.alumni.repository;

import edu.miu.alumni.entity.Tag;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TagRepository extends CrudRepository<Tag,Long> {
}
