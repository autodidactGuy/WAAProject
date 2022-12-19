package edu.miu.alumni.controller;

import edu.miu.alumni.dto.EducationDto;
import edu.miu.alumni.entity.Education;
import edu.miu.alumni.service.BasicService;
import edu.miu.alumni.service.EducationService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/education")
public class EducationController
extends BaseController<Education, EducationDto,Long>
{
    public EducationController(EducationService<Education, EducationDto, Long> bs) {
        super(bs);
    }
}
