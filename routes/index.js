var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/about', function(req, res, next) {
    res.render('about');
});

router.get('/projects', function(req, res, next) {
    res.render('projects');
});

router.get('/contact', function(req, res, next) {
    res.render('contact');
});

/* Contact Form Submission */
router.post('/contact', function(req, res) {

    console.log("Name:", req.body.name);
    console.log("Email:", req.body.email);
    console.log("Message:", req.body.message);

    res.send("Message submitted successfully!");

});


module.exports = router;