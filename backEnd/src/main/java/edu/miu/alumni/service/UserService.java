package edu.miu.alumni.service;

import edu.miu.alumni.dto.UserDto;

import java.util.List;

public interface UserService <T,H,A> extends BasicService<T,H,A> {

    List<UserDto> getAllStudentAndFacultyByAdmin();
}
