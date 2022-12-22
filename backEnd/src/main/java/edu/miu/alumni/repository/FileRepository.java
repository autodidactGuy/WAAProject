package edu.miu.alumni.repository;

import edu.miu.alumni.entity.File;
import org.springframework.data.repository.CrudRepository;

public interface FileRepository extends CrudRepository<File,Long> {
}
