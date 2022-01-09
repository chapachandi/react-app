import firebase from "firebase/compat";

// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-app.js');
// eslint-disable-next-line no-undef
 importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-messaging.js');

 if ('serviceWorker' in navigator) {
     navigator.serviceWorker.register('../firebase-messaging-sw.js')
       .then(function(registration) {
         console.log('Registration successful, scope is:', registration.scope);
       }).catch(function(err) {
        console.log('Service worker registration failed, error:', err);
       });
    }

 firebase.initializeApp({
     messagingSenderId: "758141558922",
   })

const initMessaging = firebase.messaging()