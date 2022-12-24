package edu.miu.alumni.aspects;

import com.google.firebase.messaging.FirebaseMessagingException;
import edu.miu.alumni.dto.JobAdvertisementDto;
import edu.miu.alumni.entity.JobAdvertisement;
import edu.miu.alumni.entity.Tag;
import edu.miu.alumni.entity.User;
import edu.miu.alumni.model.SendNotificationDetails;
import edu.miu.alumni.repository.JobAdvertisementRepository;
import edu.miu.alumni.repository.JobExperienceRepository;
import edu.miu.alumni.service.FirebaseMessageService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Aspect
@Component
@NoArgsConstructor
@AllArgsConstructor
@Slf4j
public class AdNotification {
    @Autowired
    private HttpServletRequest request;

    @Autowired
    private FirebaseMessageService firebaseMessageService;
    @Pointcut("@annotation(edu.miu.alumni.aspects.annotation.InformStuNewIntrestAdPosted)")
    public void informStuNewIntrestAdPosted(){ }

    @Pointcut("@annotation(edu.miu.alumni.aspects.annotation.InformPosterNewStuApplied)")
    public void informPosterNewStuApplied(){ }




    @AfterReturning(
            pointcut="informPosterNewStuApplied()",
            returning="retVal")
    public void doAccessCheck(Object retVal) {
        JobAdvertisement jobAdvertismentDto1 = (JobAdvertisement)retVal;
        List<Tag> tags = jobAdvertismentDto1.getTags();
        SendNotificationDetails sendNotificationDetails = new SendNotificationDetails();
//
        String title = "A new interested position posted";
//
        String formattedMsg = String.format("hey,position  title is:%s  \n worked in %s - %s \nclick here to see the details of position %s",
                jobAdvertismentDto1.getProfile(), jobAdvertismentDto1.getCity().getState(), jobAdvertismentDto1.getCity().getState(),
                request.getRemoteHost()+"/jobAdvertisement"+jobAdvertismentDto1.getId() );

        log.info("==================================gonna send notification to user who insterested in ==================================");

        //find out who is intrested in this tag
        Set<User> notificationUsers = new HashSet<User>();
        for(Tag tg:tags){
            List<User> interstedInUsers = tg.getInterstedInUsers();
            notificationUsers.addAll(interstedInUsers);
        }

//        each of them send notification
        notificationUsers.forEach(x->{
            try {
                firebaseMessageService.sendNotification(title,formattedMsg,x.getFcm_token());
            } catch (FirebaseMessagingException e) {
                throw new RuntimeException(e);
            }
        });
    }

//

    }

//    @After("informPosterNewUserApplied()")
//    public void informPosterNewUserApplied(JoinPoint joinPoint,Object jobAdvertismentDto){
//
//    }
