package edu.miu.alumni.controller;

import edu.miu.alumni.dto.JobAdvertisementDto;
import edu.miu.alumni.dto.JobExperienceDto;
import edu.miu.alumni.dto.StudentDto;
import edu.miu.alumni.entity.JobAdvertisement;
import edu.miu.alumni.entity.JobExperience;
import edu.miu.alumni.entity.Student;
import edu.miu.alumni.model.SearchJobRequest;
import edu.miu.alumni.service.BasicService;
import edu.miu.alumni.service.JobAdvertisementService;
import edu.miu.alumni.service.StudentService;
import org.springframework.web.bind.annotation.*;

import  java.util.*;
@RestController
@CrossOrigin
@RequestMapping("/jobAdvertisement")
public class JobAdvertisementController extends BaseController<JobAdvertisement, JobAdvertisementDto,Long>{

    public JobAdvertisementService<JobAdvertisement, JobAdvertisementDto, Long> bs ;
    public JobAdvertisementController(JobAdvertisementService<JobAdvertisement, JobAdvertisementDto, Long> bs) {
        super(bs);
        this.bs = bs;
    }

    @PostMapping("/filterJobs")
    public List<JobAdvertisementDto> searchJob(@RequestBody SearchJobRequest sj){
       return  bs.searchJob(sj);
    }

    @GetMapping("/postedByme")
    public List<JobAdvertisementDto> getUserPostedAdvertisement(){
        //get all related user Advertisement by user id

        return bs.getCurUserAllPosted();
    }

    public List<JobAdvertisementDto> top10Advertisement(){
        return bs.getTop10LatestAdvertisement();
    }


}
