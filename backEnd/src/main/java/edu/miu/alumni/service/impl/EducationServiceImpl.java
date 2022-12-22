package edu.miu.alumni.service.impl;

import edu.miu.alumni.dto.EducationDto;
import edu.miu.alumni.dto.JobAdvertisementDto;
import edu.miu.alumni.dto.JobExperienceDto;
import edu.miu.alumni.dto.UserDto;
import edu.miu.alumni.entity.*;
import edu.miu.alumni.repository.EducationRepository;
import edu.miu.alumni.repository.ProfileRepository;
import edu.miu.alumni.repository.UserRepository;
import edu.miu.alumni.service.EducationService;
import edu.miu.alumni.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfigureOrder;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EducationServiceImpl extends BasicServiceImpl<Education, EducationDto,Long, EducationRepository>
implements EducationService<Education, EducationDto,Long>
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
}
