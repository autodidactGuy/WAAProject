package edu.miu.alumni.controller;

import edu.miu.alumni.entity.JobAdvertisement;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/echart")
public class EchartController {
    /**
     * job advertisements per location.
     */
    @RequestMapping("/getJobAdvertisementsPerLocation")
    public JobAdvertisement getJobAdvertisementPerLocation(){
        return null;

    }

}
