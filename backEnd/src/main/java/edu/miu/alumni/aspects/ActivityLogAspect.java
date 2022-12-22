package edu.miu.alumni.aspects;

import edu.miu.alumni.entity.ActivityLog;
import edu.miu.alumni.entity.User;
import edu.miu.alumni.repository.ActivityLogRepository;
import edu.miu.alumni.repository.UserRepository;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;

/**
 * save activity to log file
 */

@Aspect
@Component
public class ActivityLogAspect {
    @Autowired
    HttpServletRequest request;

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ActivityLogRepository activityLogRepository;

    @Pointcut("within(edu.miu.alumni.controller..*)")
    public void logActivity(){ }


    @Before("logActivity()")
    public void logActivityOfUsers(JoinPoint joinPoint) throws Throwable {
        var date = new Date();

        String name = request.getUserPrincipal()==null?"anymous":request.getUserPrincipal().getName();
        User userByEmailEquals = userRepository.findUserByEmailEquals(name);
        ActivityLog activityLog = new ActivityLog();
        activityLog.setCallTime(date);
        activityLog.setMethodName(joinPoint.getSignature().getName());
        activityLog.setRequestType(request.getMethod());

        if (request.getUserPrincipal()!=null){
            activityLog.setUserId(userByEmailEquals.getId());
        }

        activityLogRepository.save(activityLog);
    }

}
