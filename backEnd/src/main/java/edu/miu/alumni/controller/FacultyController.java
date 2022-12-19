package edu.miu.alumni.controller;

import edu.miu.alumni.dto.FacultyDto;
import edu.miu.alumni.entity.Faculty;
import edu.miu.alumni.service.BasicService;
import edu.miu.alumni.service.FacultyService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/faculty")
public class FacultyController extends BaseController<Faculty, FacultyDto,Long> {


    public FacultyController(FacultyService<Faculty, FacultyDto, Long> bs) {
        super(bs);
    }
}
