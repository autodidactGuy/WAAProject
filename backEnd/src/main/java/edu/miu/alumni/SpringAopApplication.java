package edu.miu.alumni;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import java.util.Date;
import java.util.TimeZone;
@SpringBootApplication
public class SpringAopApplication {
    public static void main(String[] args) {
        TimeZone.setDefault(TimeZone.getTimeZone("UTC"));
        SpringApplication.run(SpringAopApplication.class, args);
    }

}
