package edu.miu.alumni.repository;

import edu.miu.alumni.entity.ActivityLog;
import org.springframework.data.repository.CrudRepository;

public interface ActivityLogRepository extends CrudRepository<ActivityLog,Long> {
}
