import org.junit.jupiter.api.Test;

import java.util.Date;


public class TestDate  {
    @Test
    public void test(){
        long expirataion = 24 * 60 * 60 * 1000  ;
        Date date = new Date(System.currentTimeMillis() + expirataion);
        System.out.println(date);
    }
}
