const express = require('express');
const router = express.Router();

const firebase = require("firebase");

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.useremail;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;

    if (email){
        if (password){
            firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
                res.send(errorMessage);
            }).then(function (user) {
                res.send(user);
            });
        }else {
            res.send('no password set!');
        }
    }else {
        res.send('no email set!');
    }
});

module.exports = router;
