import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAcoED20sJLKsaMKdKvoZsvOgVl3JtR6uk",
    authDomain: "push-notification-app-9b7e6.firebaseapp.com",
    projectId: "push-notification-app-9b7e6",
    storageBucket: "push-notification-app-9b7e6.appspot.com",
    messagingSenderId: "758141558922",
    appId: "1:758141558922:web:2da08758db321b636ecd73",
    measurementId: "G-PKNFBQ23HG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
