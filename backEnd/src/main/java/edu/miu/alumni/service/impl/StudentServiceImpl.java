package edu.miu.alumni.service.impl;

import edu.miu.alumni.dto.StudentDto;
import edu.miu.alumni.entity.Student;
import edu.miu.alumni.model.SearchStudentRequest;
import edu.miu.alumni.model.echarts.StudentAgeSummary;
import edu.miu.alumni.model.echarts.StudentGenderSummary;
import edu.miu.alumni.model.echarts.StudentsNumberPerCity;
import edu.miu.alumni.model.echarts.StudentsNumberPerState;
import edu.miu.alumni.repository.StudentRepository;
import edu.miu.alumni.repository.UserRepository;import edu.miu.alumni.service.StudentService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.BigInteger;
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

        List<StudentDto> collect = res.stream()
                .filter(x->!x.isDeleted())
                .map(x -> {
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

    @Override
    public List<StudentGenderSummary> getStudentByGender() {
        Object [][] resQuery = repository.getStudentByGender();

        ArrayList<StudentGenderSummary> studentGenderSummaries = new ArrayList<StudentGenderSummary>();
        for (int i = 0; i < resQuery.length; i++) {
            studentGenderSummaries.add(new StudentGenderSummary((String) resQuery[i][0],((BigInteger)resQuery[i][1]).longValue()));
        }
        return studentGenderSummaries;
    }

    @Override
    public List<StudentAgeSummary> getNumOfStuPerAge() {
        Object [][] resQuery = repository.getNumOfStuPerAge();
        ArrayList<StudentAgeSummary> studentAgeSummarys = new ArrayList<StudentAgeSummary>();
        for (int i = 0; i < resQuery.length; i++) {
                studentAgeSummarys.add(new StudentAgeSummary(((BigDecimal) resQuery[i][0]).intValue(),((BigInteger)resQuery[i][1]).longValue()));
        }



        return studentAgeSummarys;
    }

}
