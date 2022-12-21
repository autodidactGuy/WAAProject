package edu.miu.alumni.repository;

import edu.miu.alumni.entity.State;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface StateRepository extends CrudRepository<State,String> {

    @Query(value = "" +
            "select state_code,state,string_agg(city_name,',') cities\n" +
            "from\n" +
            "(select  c.state_code,c.city_name as city_name,s.state as state\n" +
            "from cities as c join states as s\n" +
            " on  c.state_code = s.state_code)as h\n" +
            "group by state_code,state",nativeQuery = true)
    public Object[] getAllStatesAndCities();

}
