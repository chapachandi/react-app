// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAcoED20sJLKsaMKdKvoZsvOgVl3JtR6uk",
    authDomain: "push-notification-app-9b7e6.firebaseapp.com",
    projectId: "push-notification-app-9b7e6",
    storageBucket: "push-notification-app-9b7e6.appspot.com",
    messagingSenderId: "758141558922",
    appId: "1:758141558922:web:2da08758db321b636ecd73",
    measurementId: "G-PKNFBQ23HG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore();

// export default firebase;
