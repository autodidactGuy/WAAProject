package edu.miu.alumni.service;

import edu.miu.alumni.dto.TagDto;
import edu.miu.alumni.dto.UserDto;
import edu.miu.alumni.entity.User;

import java.util.List;

public interface UserService <T,H,A> extends BasicService<T,H,A> {

    List<UserDto> getAllStudentAndFacultyByAdmin();

    void resetPassword(String password, long id);

    void resetPassword(String password);

    void changeActiveStatu(long id);

    T getUserByEmail(String email);

    void subscribTags(List<String> tags);

    User currentLoginUser();


    List<TagDto> getSubscribTags();

    void resetFailedAttempts(String userEmail);
}
