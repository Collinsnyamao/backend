const express = require('express');
const router = express.Router();
const firebase = require("firebase");

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/', function(req, res, next) {

    const password = req.body.userPassword;
    const email = req.body.useremail;

    if (email){
        if (password){
            firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
                res.send({
                    "status":errorCode,
                    "errorMessage":errorMessage
                });
            }).then(function (user) {
                res.send(user);
            });
        }else {
            res.send({
                "status": "900",
                "errorMessage":"Password not set"
            });
        }
    }else {
        res.send({
            "status":900,
            "errorMessage":'Email not set'
        });
    }
});

module.exports = router;
