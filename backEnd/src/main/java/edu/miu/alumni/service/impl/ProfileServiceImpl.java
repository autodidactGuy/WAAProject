package edu.miu.alumni.service.impl;

import edu.miu.alumni.dto.ProfileDto;
import edu.miu.alumni.entity.Profile;
import edu.miu.alumni.repository.ProfileRepository;
import edu.miu.alumni.service.ProfileService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class ProfileServiceImpl  extends BasicServiceImpl<Profile, ProfileDto,Long, ProfileRepository> implements ProfileService<Profile, ProfileDto,Long>
{
    public ProfileServiceImpl(ProfileRepository repository, ModelMapper modelMapper) {
        super(repository, modelMapper);
    }
}
