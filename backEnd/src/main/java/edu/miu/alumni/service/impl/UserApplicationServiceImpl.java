package edu.miu.alumni.service.impl;

import edu.miu.alumni.dto.JobExperienceDto;
import edu.miu.alumni.dto.UserApplicationDto;
import edu.miu.alumni.entity.JobExperience;
import edu.miu.alumni.entity.Student;
import edu.miu.alumni.entity.User;
import edu.miu.alumni.entity.UserApplication;
import edu.miu.alumni.repository.JobExperienceRepository;
import edu.miu.alumni.repository.ProfileRepository;
import edu.miu.alumni.repository.UserApplicationRepository;
import edu.miu.alumni.repository.UserRepository;
import edu.miu.alumni.service.JobExperienceService;
import edu.miu.alumni.service.UserApplicationService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserApplicationServiceImpl   extends BasicServiceImpl<UserApplication, UserApplicationDto,Long, UserApplicationRepository>
    implements UserApplicationService<UserApplication, UserApplicationDto,Long> {

    @Autowired
    private UserApplicationRepository repository;

    @Autowired
    private UserRepository userRepository;
    public UserApplicationServiceImpl(UserApplicationRepository repository, ModelMapper modelMapper) {
        super(repository, modelMapper);
    }


    public List<UserApplicationDto> getCurUserAppliedJobs() {
        String name = SecurityContextHolder.getContext().getAuthentication().getName();
        User userByEmailEquals = userRepository.findUserByEmailEquals(name);
        if(userByEmailEquals instanceof Student){
            Student curStudent = (Student)userByEmailEquals;
            List<UserApplication> userApplications = curStudent.getUserApplications();
            return userApplications.stream().map(x->{
                return modelMapper.map(x,UserApplicationDto.class);
            }).collect(Collectors.toList());
        }
        return null;
    }
}

