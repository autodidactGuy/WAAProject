package edu.miu.alumni.controller;


import edu.miu.alumni.model.SendNotificationDetails;
import edu.miu.alumni.service.FirebaseMessageService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.test.context.support.WithAnonymousUser;
import org.springframework.web.bind.annotation.*;

@RestController
@Slf4j
@CrossOrigin
@RequestMapping("/notification")
public class NotificationController {


    @Autowired
    private FirebaseMessageService firebaseMessageService;


    @PostMapping("/notifyUser")
    public void sendNotice(@RequestBody SendNotificationDetails s){

        try{
            firebaseMessageService.sendNotification(s.getTitle(),s.getBody(),s.getToken());
        }catch (Exception e){
            String message = e.getMessage();
            log.info(message);
        }

    }
}
