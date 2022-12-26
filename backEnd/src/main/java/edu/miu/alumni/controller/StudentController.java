package edu.miu.alumni.controller;

import edu.miu.alumni.consts.Consts;
import edu.miu.alumni.dto.StudentDto;
import edu.miu.alumni.entity.Student;
import edu.miu.alumni.model.SearchStudentRequest;
import edu.miu.alumni.model.SignupRequest;
import edu.miu.alumni.service.BasicService;
import edu.miu.alumni.service.StudentService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/student")
public class StudentController extends BaseController<Student, StudentDto,Long> {
    public StudentService<Student, StudentDto, Long> bs ;
    public StudentController(StudentService<Student, StudentDto, Long> bs) {
        super(bs);
        this.bs = bs;
    }

    @PostMapping("/filterStudents")
    public List<StudentDto> findStudentByFaculty(@RequestBody SearchStudentRequest searchStudentRequest){
        return bs.getStudentsByFirstNameOrLastNameContainsAndMarjorEqualsAndIdAndCity_IdAndCityState(searchStudentRequest);
    }


}
