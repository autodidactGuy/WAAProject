package edu.miu.alumni.controller;
import edu.miu.alumni.dto.*;
import edu.miu.alumni.entity.*;
import edu.miu.alumni.model.echarts.AdsPerMonth;
import edu.miu.alumni.model.echarts.AvgGapPerGpa;
import edu.miu.alumni.model.echarts.JobAdvertisementsPerLocation;
import edu.miu.alumni.model.echarts.StudentsNumberPerState;
import edu.miu.alumni.service.*;
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

    @Autowired
    EducationService<Education, EducationDto,Long> educationService;

    @Autowired
    UserApplicationService<UserApplication, UserApplicationDto,Long> appliedDetailService;
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
    @GetMapping("/numberOfAdPerTag")
    public List<AdNumberPerTag> numberOfAdPerTag(){
        return tagService.numberOfAdPerTag();
    }


    /**
     *avg gap timer per gpa_range
     */
    @GetMapping("/avgGapPerGpa")
    public List<AvgGapPerGpa> getAvgGapPerGpa(){
        return educationService.getAvgGapPerGpa();
    }

    @GetMapping("/numOfAdsPerMonth")
    public List<AdsPerMonth> getAdsPerMonth(){
        return ja.getAdsPerMonth();
    }

    @GetMapping("/numOfStudentByGender")
    public List<StudentGenderSummary> getStudentByGender(){
        return stuServer.getStudentByGender();
    }

    @GetMapping("/numOfStuPerAge")
    public List<StudentAgeSummary> numOfStuPerAge(){
        return stuServer.getNumOfStuPerAge();
    }

    @GetMapping("/getAppliedJobNumPerMonth")
    public List<AppliedJobPerMonth> getAppliedJobNumPerMonth(){
        return appliedDetailService.getAppliedJobNumPerMonth();
    }



}
