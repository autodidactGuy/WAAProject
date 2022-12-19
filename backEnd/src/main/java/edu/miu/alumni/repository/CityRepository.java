package edu.miu.alumni.repository;

import edu.miu.alumni.entity.City;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CityRepository extends CrudRepository<City,Long> {

    public City findByCityId(long cityId);
}
