package edu.miu.alumni.service;

import edu.miu.alumni.model.echarts.AdsPerMonth;
import edu.miu.alumni.model.SearchJobRequest;

import edu.miu.alumni.model.echarts.AdertisementsPerTag;
import edu.miu.alumni.model.echarts.JobAdvertisementsPerLocation;
import java.util.List;
public interface JobAdvertisementService <T,H,A> extends BasicService<T,H,A>{

    List<H> searchJob(SearchJobRequest sj);

    List<H> getCurUserAllPosted();

    List<H> getTop10LatestAdvertisement();

    List<JobAdvertisementsPerLocation> getJobAdvertisementPerLocation();

    List<AdertisementsPerTag> getAdertisementsPerTag();


    List<AdsPerMonth> getAdsPerMonth();
}
