package edu.miu.alumni.service;
import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.FirebaseMessagingException;
import com.google.firebase.messaging.Message;
import com.google.firebase.messaging.Notification;
import org.springframework.stereotype.Service;

@Service
public class FirebaseMessageService {
    private final FirebaseMessaging firebaseMessaging;

    public FirebaseMessageService(FirebaseMessaging firebaseMessaging) {
        this.firebaseMessaging = firebaseMessaging;
    }

    public void sendNotificationToTopic(String title, String body, String topic) throws FirebaseMessagingException{
        Notification notification = Notification
                .builder()
                .setTitle(title)
                .setBody(body)
                .build();
        Message message = Message.builder()
        .setNotification(notification)
        .setTopic(topic)
        .build();

        String response = FirebaseMessaging.getInstance().send(message);
    }
    public void sendNotification(String title, String body, String token) throws FirebaseMessagingException {

        Notification notification = Notification
                .builder()
                .setTitle(title)
                .setBody(body)
                .build();

        Message message = Message
                .builder()
                .setToken(token)
                .setNotification(notification)
                .build();
        firebaseMessaging.send(message);
    }
}
