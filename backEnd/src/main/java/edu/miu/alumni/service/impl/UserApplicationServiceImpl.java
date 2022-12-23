package edu.miu.alumni.service.impl;

import edu.miu.alumni.consts.Consts;
import edu.miu.alumni.dto.JobExperienceDto;
import edu.miu.alumni.dto.UserApplicationDto;
import edu.miu.alumni.dto.UserDto;
import edu.miu.alumni.entity.*;
import edu.miu.alumni.model.echarts.AppliedJobPerMonth;
import edu.miu.alumni.repository.*;
import edu.miu.alumni.service.JobExperienceService;
import edu.miu.alumni.service.UserApplicationService;
import edu.miu.alumni.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserApplicationServiceImpl   extends BasicServiceImpl<UserApplication, UserApplicationDto,Long, UserApplicationRepository>
    implements UserApplicationService<UserApplication, UserApplicationDto,Long> {

    @Autowired
    private UserApplicationRepository repository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private JobAdvertisementRepository jobAdvertisementRepository;
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService<User, UserDto,Long> userService;
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

    @Override
    public List<UserApplicationDto> mostRecentAppliedJob() {
        return repository.mostRecentAppliedJob10().stream().map(x->modelMapper.map(x,UserApplicationDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public void applyJob(Long id) {
        //1:find the job advertismet by id;
        // new User Application

        User user = userService.currentLoginUser();

        if(! (user instanceof Student)){
            return ;
        }
        UserApplication userApplication = new UserApplication();
        userApplication.setStudent((Student) user);
        JobAdvertisement jobAdvertisement = jobAdvertisementRepository.findById(id).get();
        userApplication.setJa(jobAdvertisement);
        userApplication.setApplicationDate(new Date());
        repository.save(userApplication);
    }

    @Override
    public List<AppliedJobPerMonth> getAppliedJobNumPerMonth() {
        Object [][] resQuery =  repository.getAppliedJobNumberPerMonth();

        ArrayList<AppliedJobPerMonth> appliedJobPerMonths = new ArrayList<>();
        for (int i = 0; i < resQuery.length; i++) {
                appliedJobPerMonths.add(new AppliedJobPerMonth((String)resQuery[i][0],((BigInteger)resQuery[i][1]).intValue()));
        }
        return appliedJobPerMonths;
    }

    @Override
    public UserApplicationDto save(UserApplicationDto ad) {
        java.util.Date applicationDate = ad.getApplicationDate();
        String name = SecurityContextHolder.getContext().getAuthentication().getName();
        User userByEmailEquals = userRepository.findUserByEmailEquals(name);
        List<String> collect = userByEmailEquals.getRole().stream().map(Role::getName).collect(Collectors.toList());

        if(collect.contains(Consts.ROLE_STUDENT)
            && userByEmailEquals instanceof Student
        ){
            Long advertisementId = ad.getId();
            JobAdvertisement jobAdvertisement = jobAdvertisementRepository.findById(advertisementId).get();
            UserApplication userApplication = new UserApplication();
            userApplication.setApplicationDate(applicationDate);
            userApplication.setJa(jobAdvertisement);
            userApplication.setStudent((Student) userByEmailEquals);
            repository.save(userApplication);
        }
        return null;
    }



}

