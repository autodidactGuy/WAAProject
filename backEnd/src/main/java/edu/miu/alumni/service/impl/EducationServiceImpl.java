package edu.miu.alumni.service.impl;

import edu.miu.alumni.dto.EducationDto;
import edu.miu.alumni.dto.UserDto;
import edu.miu.alumni.entity.*;
import edu.miu.alumni.model.echarts.AvgGapPerGpa;
import edu.miu.alumni.repository.EducationRepository;
import edu.miu.alumni.repository.ProfileRepository;
import edu.miu.alumni.repository.UserRepository;
import edu.miu.alumni.service.EducationService;
import edu.miu.alumni.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class EducationServiceImpl extends BasicServiceImpl<Education, EducationDto,Long, EducationRepository>
implements EducationService<Education, EducationDto, Long>
{
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ProfileRepository profileRepository;

    @Autowired
    private UserService<User, UserDto,Long> userService;
    public EducationServiceImpl(EducationRepository repository, ModelMapper modelMapper) {
        super(repository, modelMapper);
    }

    @Override
    public EducationDto save(EducationDto ad) {
        Education edu = modelMapper.map(ad, Education.class);
        Education save1 = repository.save(edu);


        User user = userService.currentLoginUser();
        Profile profile = user.getProfile();

        List<Education> educationList = profile.getEducationList();
        educationList.add(edu);
        profile.setEducationList(educationList);
        Profile save = profileRepository.save(profile);
        profileRepository.save(save);

        return modelMapper.map(save1,EducationDto.class);
    }

    @Override
    public List<EducationDto> getAll() {
        User user = userService.currentLoginUser();
        return user.getProfile().getEducationList().stream()
                .filter(x->!x.isDeleted())
                .map(x->modelMapper.map(x,EducationDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public List<AvgGapPerGpa> getAvgGapPerGpa() {
        Object[][] resQuery =  repository.getAvgGapPerGpa();
        var avgGapPerGpas = new ArrayList<AvgGapPerGpa>();
        for (int i = 0; i < resQuery.length; i++) {
            avgGapPerGpas.add(new AvgGapPerGpa((String)resQuery[i][0],((java.math.BigDecimal)resQuery[i][1]).longValue()));
        }
        return avgGapPerGpas;
    }
}
