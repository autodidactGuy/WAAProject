package edu.miu.alumni.service.impl;

import edu.miu.alumni.dto.CityDto;
import edu.miu.alumni.entity.City;
import edu.miu.alumni.entity.CityId;
import edu.miu.alumni.repository.CityRepository;
import edu.miu.alumni.service.CityService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CityServiceImpl extends BasicServiceImpl<City, CityDto,CityId, CityRepository> implements CityService<City, CityDto, CityId> {

    public CityServiceImpl(CityRepository repository, ModelMapper modelMapper) {
        super(repository,modelMapper);
    }

}
