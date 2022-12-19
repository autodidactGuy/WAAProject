package edu.miu.alumni.controller;

import edu.miu.alumni.dto.JobAdvertisementDto;
import edu.miu.alumni.dto.JobExperienceDto;
import edu.miu.alumni.entity.JobAdvertisement;
import edu.miu.alumni.entity.JobExperience;
import edu.miu.alumni.service.JobAdvertisementService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/jobAdvertisement")
public class JobAdvertisementController extends BaseController<JobAdvertisement, JobAdvertisementDto,Long>{
    public JobAdvertisementController(JobAdvertisementService<JobAdvertisement, JobAdvertisementDto, Long> bs) {
        super(bs);
    }


}
