var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});

/* GET About page. */
router.get('/about', function(req, res) {
    res.render('about', { 'txt' : "Nulla vestibulum hendrerit metus at pulvinar. Etiam at posuere justo, aciaculis risus. Nulla pulvinar, mi nec bibendum dignissim, libero turpis congue odio, adipiscing interdum arcuelit a metus. Nulla eget dolor a ipsum tincidunt tincidunt id nec quam." });
});

/* GET contact page. */
router.get('/contact', function(req, res) {
    res.render('contact');
});

/* POST contact page (submit). */
router.post('/contact', function(req, res) {
    console.log('name ' + req.param('name'));
    res.render('contact', { name: req.param('name') });
});


module.exports = router;