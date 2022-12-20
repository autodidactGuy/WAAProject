package edu.miu.alumni.service.impl;

import edu.miu.alumni.dto.StudentDto;
import edu.miu.alumni.entity.Student;
import edu.miu.alumni.model.SearchStudentRequest;
import edu.miu.alumni.model.echarts.StudentsNumberPerCity;
import edu.miu.alumni.model.echarts.StudentsNumberPerState;
import edu.miu.alumni.repository.StudentRepository;
import edu.miu.alumni.repository.UserRepository;import edu.miu.alumni.service.StudentService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class StudentServiceImpl extends BasicServiceImpl<Student, StudentDto,Long, StudentRepository>
implements StudentService<Student, StudentDto,Long>
{
    private StudentRepository repository;
    public StudentServiceImpl(StudentRepository repository, ModelMapper modelMapper) {
        super(repository, modelMapper);
        this.repository = repository;
    }


    @Override
    public List<StudentDto> getStudentsByFirstNameOrLastNameContainsAndMarjorEqualsAndIdAndCity_IdAndCityState(SearchStudentRequest searchReq ) {


       var res =   repository.getStudentsByFirstNameOrLastNameContainsAndMarjorEqualsAndCity_IdAndCityStateAndIdEquals(
                    searchReq.getMajor(),searchReq.getCity(),searchReq.getStudentId()==null?null: Long.parseLong(searchReq.getStudentId()),searchReq.getState(),searchReq.getName() );

        List<StudentDto> collect = res.stream().map(x -> {
            return modelMapper.map(x, StudentDto.class);
        }).collect(Collectors.toList());

        return collect;
    }

    @Override
    public List<StudentsNumberPerState> getStudentsNumberPerState() {
        return repository.getStudentsNumberPerState();

    }

    @Override
    public List<StudentsNumberPerCity> getStudentsNumberPerCity(String stateCode) {
        return repository.getStudentsNumberPerCity(stateCode);
    }

}
