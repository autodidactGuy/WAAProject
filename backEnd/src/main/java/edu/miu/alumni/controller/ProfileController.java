package edu.miu.alumni.controller;

import edu.miu.alumni.dto.ProfileDto;
import edu.miu.alumni.entity.Profile;
import edu.miu.alumni.service.BasicService;
import edu.miu.alumni.service.ProfileService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/profileController")
public class ProfileController extends BaseController<Profile, ProfileDto,Long>{
    public ProfileController(ProfileService<Profile, ProfileDto, Long> bs) {
        super(bs);
    }
}
