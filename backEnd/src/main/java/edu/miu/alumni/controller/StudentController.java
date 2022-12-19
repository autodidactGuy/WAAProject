package edu.miu.alumni.controller;

import edu.miu.alumni.dto.StudentDto;
import edu.miu.alumni.entity.Student;
import edu.miu.alumni.service.BasicService;
import edu.miu.alumni.service.StudentService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/student")
public class StudentController extends BaseController<Student, StudentDto,Long> {
    public StudentController(StudentService<Student, StudentDto, Long> bs) {
        super(bs);
    }
}
