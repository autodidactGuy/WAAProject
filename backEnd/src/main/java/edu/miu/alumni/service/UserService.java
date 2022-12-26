package edu.miu.alumni.service;

import edu.miu.alumni.dto.StudentDto;
import edu.miu.alumni.dto.TagDto;
import edu.miu.alumni.dto.UserDto;
import edu.miu.alumni.entity.User;
import edu.miu.alumni.model.ResetPassword;
import edu.miu.alumni.model.SignupRequest;
import edu.miu.alumni.model.UserFmcToken;

import java.util.List;

public interface UserService <T,H,A> extends BasicService<T,H,A> {

    List<UserDto> getAllStudentAndFacultyByAdmin();

    StudentDto getMyInfo();

    void setMyInfo(SignupRequest myInfoDto);

    void resetPassword(String password, long id);

    String resetPassword(ResetPassword password);

    void changeActiveStatu(long id);

    T getUserByEmail(String email);

    void subscribTags(List<String> tags);

    User currentLoginUser();


    List<TagDto> getSubscribTags();

    void resetFailedAttempts(String userEmail);

    H updateFcmToken(UserFmcToken t);
}
