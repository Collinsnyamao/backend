const express = require('express');
const router = express.Router();
const firebase = require('firebase');




/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/', function(req, res, next) {

    const username = req.body.username;
    const photoURL = req.body.photoURL;
    const user = firebase.auth().currentUser;
    user.updateProfile({
        displayName: username,
        photoURL: photoURL
    }).then(function() {
        res.send('update successful');
        // Update successful.
    }).catch(function(error) {
        // An error happened.
        res.send(error);
    });

});




module.exports = router;
