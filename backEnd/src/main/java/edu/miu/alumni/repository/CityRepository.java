package edu.miu.alumni.repository;

import edu.miu.alumni.entity.City;
import edu.miu.alumni.entity.CityId;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CityRepository extends CrudRepository<City,CityId> {


    public City findById_CityNameAndId_StateCode(String cityName,String StateCode);
}
