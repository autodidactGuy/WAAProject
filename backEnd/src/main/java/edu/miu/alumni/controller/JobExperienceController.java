package edu.miu.alumni.controller;

import edu.miu.alumni.dto.JobExperienceDto;
import edu.miu.alumni.entity.JobExperience;
import edu.miu.alumni.service.BasicService;
import edu.miu.alumni.service.JobExperienceService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/jobExperience")
public class JobExperienceController extends BaseController<JobExperience, JobExperienceDto,Long>{
    public JobExperienceController(JobExperienceService<JobExperience, JobExperienceDto, Long> bs) {
        super(bs);
    }
}
