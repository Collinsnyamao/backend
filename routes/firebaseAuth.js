const express = require('express');
const router = express.Router();

var firebase = require("firebase");

const firebaseConfig = {
    apiKey: "AIzaSyDz-Rhu6GFmkENhI9sitX6aEUinZGA3YqM",
    authDomain: "dev1-b8296.firebaseapp.com",
    databaseURL: "https://dev1-b8296.firebaseio.com",
    projectId: "dev1-b8296",
    storageBucket: "dev1-b8296.appspot.com",
    messagingSenderId: "175669841938",
    appId: "1:175669841938:web:43e550c99a006b18"
};

firebase.initializeApp(firebaseConfig);


module.exports = router;
