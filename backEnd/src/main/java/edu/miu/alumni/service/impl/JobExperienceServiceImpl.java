package edu.miu.alumni.service.impl;

import edu.miu.alumni.dto.CityDto;
import edu.miu.alumni.dto.JobExperienceDto;
import edu.miu.alumni.entity.*;
import edu.miu.alumni.repository.JobExperienceRepository;
import edu.miu.alumni.repository.ProfileRepository;
import edu.miu.alumni.repository.UserRepository;
import edu.miu.alumni.service.JobExperienceService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.jar.JarOutputStream;

@Service
public class JobExperienceServiceImpl  extends BasicServiceImpl<JobExperience, JobExperienceDto,Long, JobExperienceRepository>
implements JobExperienceService<JobExperience, JobExperienceDto,Long>
{
    @Autowired
    private edu.miu.alumni.repository.CityRepository cityRepository;
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProfileRepository profileRepository;
    public JobExperienceServiceImpl(JobExperienceRepository repository, ModelMapper modelMapper) {
        super(repository, modelMapper);
    }

    @Override
    public JobExperienceDto save(JobExperienceDto ad) {
        JobExperience jde1 = modelMapper.map(ad, JobExperience.class);
        String name = SecurityContextHolder.getContext().getAuthentication().getName();
        User userByEmailEquals = userRepository.findUserByEmailEquals(name);
        Profile profile1 = userByEmailEquals.getProfile();
        List<JobExperience> jobExperienceList = profile1.getJobExperienceList();

//        CityDto city = ad.getCity();
//        City byIdCityNameAndIdStateCode = cityRepository.findById_CityNameAndId_StateCode(city.getId().getCityName(), city.getId().getStateCode());
//
//        jde1.setCity(byIdCityNameAndIdStateCode);
        jobExperienceList.add(jde1);

        profile1.setJobExperienceList(jobExperienceList);
        JobExperience save = repository.save(jde1);
        profileRepository.save(profile1);
        return modelMapper.map(save,JobExperienceDto.class);
    }

    @Override
    public List<JobExperienceDto> getAll() {
        List<JobExperienceDto> all = super.getAll();
        return  null;

    }
}
