package edu.miu.alumni.controller;

import edu.miu.alumni.dto.JobAdvertisementDto;
import edu.miu.alumni.dto.StudentDto;
import edu.miu.alumni.dto.TagDto;
import edu.miu.alumni.entity.JobAdvertisement;
import edu.miu.alumni.entity.Student;
import edu.miu.alumni.entity.Tag;
import edu.miu.alumni.model.echarts.JobAdvertisementsPerLocation;
import edu.miu.alumni.model.echarts.StudentsNumberPerState;
import edu.miu.alumni.service.JobAdvertisementService;
import edu.miu.alumni.service.StudentService;
import edu.miu.alumni.service.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import edu.miu.alumni.model.echarts.*;
import java.util.*;
@RestController
@CrossOrigin
@RequestMapping("/echart")
public class EchartController {

    @Autowired
    JobAdvertisementService<JobAdvertisement, JobAdvertisementDto,Long> ja;

    @Autowired
    StudentService<Student, StudentDto,Long> stuServer;

    @Autowired
    TagService<Tag, TagDto,Long> tagService;

    /**
     * number of job advertisements per location.
     */
    @GetMapping("/getJobAdvertisementsPerLocation")
    public List<JobAdvertisementsPerLocation> getJobAdvertisementPerLocation(){
        return ja.getJobAdvertisementPerLocation();
    }

    /**
     * number of job student per state.
     */
    @GetMapping("/getStudentsNumberPerState")
    public List<StudentsNumberPerState> getStudentsNumberPerState(){
        return stuServer.getStudentsNumberPerState();
    }

    /**
     * Number of students per city. (User should select the state.)
     */
    @GetMapping("/getStudentsNumberPerCity")
    public List<StudentsNumberPerCity> getStudentsNumberPerCity(@RequestParam String stateCode){
        return stuServer.getStudentsNumberPerCity(stateCode);
    }

    /**
     * Number advertisment.per tag
     * Tags.
     */
    @GetMapping("/getAdertisementsPerTag")
    public List<AdertisementsPerTag> getAdertisementsPerTag(){
        return ja.getAdertisementsPerTag();
    }


    /**
     * Tags with location.
     * Tags.
     */
    @GetMapping("/numberOfTagsPerLocation")
    public List<TagsNumberPerLocation> numberOfTagsPerLocation(){
        return tagService.numberOfTagsPerLocation();
    }


    /**
     * Tags with location.
     * Tags.
     */
    @GetMapping("/averageTimeFindJobPerGpaRange")
    public long averageTimeFindJobPerGapYear(){
//        return stuServer.averageTimeFindJobPerGapYear(stateCode);
        return 0;
    }


}
