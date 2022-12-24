// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');


const firebaseConfig = {
    apiKey: "AIzaSyCTBc2Fc_8laz1HXMEAzTPvm8GIaziA39Y",
    authDomain: "waa-final-project-fa8b5.firebaseapp.com",
    projectId: "waa-final-project-fa8b5",
    storageBucket: "waa-final-project-fa8b5.appspot.com",
    messagingSenderId: "590419112481",
    appId: "1:590419112481:web:d713a0f41400777eada960",
    measurementId: "G-R71DYWS0BX"
  };

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
