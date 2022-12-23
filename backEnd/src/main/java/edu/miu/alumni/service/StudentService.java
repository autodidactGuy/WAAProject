package edu.miu.alumni.service;
import edu.miu.alumni.model.echarts.*;

import edu.miu.alumni.dto.StudentDto;
import edu.miu.alumni.model.SearchStudentRequest;
import edu.miu.alumni.model.echarts.StudentsNumberPerCity;
import edu.miu.alumni.model.echarts.StudentsNumberPerState;

import java.util.List;

public interface StudentService <T,H,A> extends BasicService<T,H,A>{

    public List<H> getStudentsByFirstNameOrLastNameContainsAndMarjorEqualsAndIdAndCity_IdAndCityState(SearchStudentRequest searchStudentRequest);

    List<StudentsNumberPerState> getStudentsNumberPerState();

    List<StudentsNumberPerCity> getStudentsNumberPerCity(String stateCode);

    List<StudentGenderSummary> getStudentByGender();

    List<StudentAgeSummary> getNumOfStuPerAge();
}
