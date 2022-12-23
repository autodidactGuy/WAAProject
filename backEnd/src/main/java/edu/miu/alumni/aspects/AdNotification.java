package edu.miu.alumni.aspects;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class AdNotification {

    @Pointcut("@annotation(edu.miu.alumni.controller..*)")
    public void informPosterNewStuApplied(){ }


}
