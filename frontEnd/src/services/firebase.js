import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyCTBc2Fc_8laz1HXMEAzTPvm8GIaziA39Y",
    authDomain: "waa-final-project-fa8b5.firebaseapp.com",
    projectId: "waa-final-project-fa8b5",
    storageBucket: "waa-final-project-fa8b5.appspot.com",
    messagingSenderId: "590419112481",
    appId: "1:590419112481:web:d713a0f41400777eada960",
    measurementId: "G-R71DYWS0BX"
  };

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const getFCMToken = (setTokenFound) => {
  return getToken(messaging, {vapidKey: 'BCe790Ghx5Xt9EUyH-9VVkjN1x0FFFPhPXmfrfG1-lzqEsTRwND34FfOdim97D0vyAbhpb6rv5sE5BDQtjKLqJY'}).then((currentToken) => {
    if (currentToken) {
      console.log('current token for client: ', currentToken);
      setTokenFound(true);
      // Track the token -> client mapping, by sending to backend server
      // show on the UI that permission is secured
    } else {
      console.log('No registration token available. Request permission to generate one.');
      setTokenFound(false);
      // shows on the UI that permission is required 
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // catch error while creating client token
  });
}

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
});