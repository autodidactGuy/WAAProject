package edu.miu.alumni.controller;

import edu.miu.alumni.consts.Consts;
import edu.miu.alumni.dto.JobAdvertisementDto;
import edu.miu.alumni.dto.UserApplicationDto;
import edu.miu.alumni.entity.JobAdvertisement;
import edu.miu.alumni.entity.UserApplication;
import edu.miu.alumni.service.JobAdvertisementService;
import edu.miu.alumni.service.UserApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;

/**
 * there contains the data when user apply the job
 * and the function get latest 10 jobs
 * and the function list current user all applied jobs function
 */
@RestController
@CrossOrigin
@RequestMapping("/userApplication")
public class UserApplicationController  extends BaseController<UserApplication, UserApplicationDto,Long>{

    public UserApplicationService<UserApplication, UserApplicationDto, Long> bs ;
    public UserApplicationController(UserApplicationService<UserApplication, UserApplicationDto, Long> bs) {
        super(bs);
        this.bs = bs;
    }

    @PreAuthorize("hasRole('ROLE_"+ Consts.ROLE_STUDENT +"')")
    @GetMapping("/getAppliedJobs")
    public ResponseEntity<?>  getAllAppliedJobs(){
        var curUserAppliedJobs = bs.getCurUserAppliedJobs();
        if(curUserAppliedJobs == null){
            return ResponseEntity.badRequest().body("You are not the student role");
        }else{
            return ResponseEntity.ok( bs.getCurUserAppliedJobs());
        }
    }

    @GetMapping("/mostRecentAppliedJob10")
    public List<UserApplicationDto> mostRecentAppliedJob(){
        return bs.mostRecentAppliedJob();
    }




}
