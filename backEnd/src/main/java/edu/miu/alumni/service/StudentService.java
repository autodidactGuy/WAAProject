package edu.miu.alumni.service;


import edu.miu.alumni.dto.StudentDto;
import edu.miu.alumni.model.SearchStudentRequest;

import java.util.List;

public interface StudentService <T,H,A> extends BasicService<T,H,A>{

    public List<H> getStudentsByFirstNameOrLastNameContainsAndMarjorEqualsAndIdAndCity_IdAndCityState(SearchStudentRequest searchStudentRequest);
}
