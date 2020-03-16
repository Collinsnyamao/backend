const express = require('express');
const router = express.Router();
const firebase = require('firebase');

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // ...
        const userModel = {email, uid , isAnonymous};
        console.log("Current user: ", userModel);
    } else {
        // User is signed out.
        // ...
        console.log("no user logged in");
    }
});


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
