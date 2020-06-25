importScripts('https://www.gstatic.com/firebasejs/7.15.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.15.4/firebase-messaging.js');

var firebaseConfig = {
    apiKey: "AIzaSyBzuYa90WN8OgJ1vQP7-avGQh5NRWuo1Fk",
    authDomain: "expenses-46cdb.firebaseapp.com",
    databaseURL: "https://expenses-46cdb.firebaseio.com",
    projectId: "expenses-46cdb",
    storageBucket: "expenses-46cdb.appspot.com",
    messagingSenderId: "859884447605",
    appId: "1:859884447605:web:92e7f85ba6ec547710953c",
    measurementId: "G-LH3MRMBJ62"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();


