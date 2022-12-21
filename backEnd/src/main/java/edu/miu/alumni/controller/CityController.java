package edu.miu.alumni.controller;


import edu.miu.alumni.dto.CityDto;
import edu.miu.alumni.entity.City;
import edu.miu.alumni.entity.CityId;
import edu.miu.alumni.service.BasicService;
import edu.miu.alumni.service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin
@RequestMapping("/city")
public class CityController extends BaseController<City,CityDto, CityId>{

    @Autowired
    public CityController(CityService<City, CityDto, CityId> bs) {
        super(bs);
    }
}
