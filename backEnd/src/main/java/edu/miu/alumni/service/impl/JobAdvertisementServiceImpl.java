package edu.miu.alumni.service.impl;

import edu.miu.alumni.dto.JobAdvertisementDto;
import edu.miu.alumni.entity.*;
import edu.miu.alumni.model.echarts.AdsPerMonth;
import edu.miu.alumni.model.SearchJobRequest;
import edu.miu.alumni.model.echarts.AdertisementsPerTag;
import edu.miu.alumni.repository.CityRepository;
import edu.miu.alumni.repository.JobAdvertisementRepository;
import edu.miu.alumni.repository.StudentRepository;
import edu.miu.alumni.repository.UserRepository;
import edu.miu.alumni.service.JobAdvertisementService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import edu.miu.alumni.aspects.annotation.InformPosterNewStuApplied;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import edu.miu.alumni.model.echarts.JobAdvertisementsPerLocation;
@Service
public class JobAdvertisementServiceImpl
        extends BasicServiceImpl<JobAdvertisement, JobAdvertisementDto,Long, JobAdvertisementRepository>
        implements JobAdvertisementService<JobAdvertisement, JobAdvertisementDto,Long> {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private StudentRepository studentRepostory;
    @Autowired
    private CityRepository cityRepository;
    public JobAdvertisementServiceImpl(JobAdvertisementRepository repository, ModelMapper modelMapper) {
        super(repository, modelMapper);
    }

    @Override
    public List<JobAdvertisementDto> searchJob(SearchJobRequest sj) {
        var  byContidtions = repository.findByContidtions(
                sj.getCompanyName(), sj.getCityCode(), sj.getState()
        );

        var filterAds = new ArrayList<JobAdvertisement>();
        if(sj.getTags()!=null){
            List<Long> tagsIds = sj.getTags();
            for(JobAdvertisement jt:byContidtions){
                List<Long> collect = jt.getTags().stream().map(x -> x.getId()).collect(Collectors.toList());
                for(Long adsT:collect){
                    if(tagsIds.contains(adsT)){
                        filterAds.add(jt);
                    }
                }
            }
        }else{
            filterAds = byContidtions;
        }

        return   filterAds.stream()
                .filter(x->!x.isDeleted())
                .map(x -> {
            return modelMapper.map(x, JobAdvertisementDto.class);
        }).collect(Collectors.toList());


    }

    @Override
    public List<JobAdvertisementDto> getCurUserAllPosted() {
        String name = SecurityContextHolder.getContext().getAuthentication().getName();

        User userByEmailEquals = userRepository.findUserByEmailEquals(name);

        Long id = userByEmailEquals.getId();

        return repository.getAllByPoster(id).stream()
                .filter(x->!x.isDeleted())
                .map(x->
                modelMapper.map(x,JobAdvertisementDto.class)
        ).collect(Collectors.toList());

    }

    @Override
    public List<JobAdvertisementDto> getTop10LatestAdvertisement() {
        return repository.findTop10JobAd().stream()
                .filter(x->!x.isDeleted())
                .map(x->
            modelMapper.map(x,JobAdvertisementDto.class)
        ).collect(Collectors.toList());
    }

    @Override
    public List<JobAdvertisementsPerLocation> getJobAdvertisementPerLocation() {
        return repository.getJobAdvertisementPerLocation();

    }

    @Override
    public List<AdertisementsPerTag> getAdertisementsPerTag() {
        return null;
//        return repository.getAdertisementsPerTag();
    }

    @Override
    public List<AdsPerMonth> getAdsPerMonth() {
        Object [][] resQuery = repository.getAdsPerMonth();
        ArrayList<AdsPerMonth> adsPerMonths = new ArrayList<>();
        for (int i = 0; i < resQuery.length; i++) {
            adsPerMonths.add(new AdsPerMonth((String )resQuery[i][0],((BigInteger)resQuery[i][1]).longValue()));
        }
        return adsPerMonths;
    }

    @Override
    @InformPosterNewStuApplied
    public JobAdvertisementDto save(JobAdvertisementDto ad) {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();

        JobAdvertisement ja = modelMapper.map(ad, JobAdvertisement.class);
        Student studentByEmailEquals = studentRepostory.findStudentByEmailEquals(email);
        ja.setPoster(studentByEmailEquals);
        JobAdvertisement save = repository.save(ja);



        return modelMapper.map(save,JobAdvertisementDto.class);
    }
}
