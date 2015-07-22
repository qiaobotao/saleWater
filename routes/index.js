var express = require('express');
var router = express.Router();

/* GET home page. */
router.all('/', function(req, res, next) {
  res.render('index');
});

router.all('/about', function(req, res, next) {
    res.render('about');
});

router.all('/cooperation', function(req, res, next) {
    res.render('cooperation');
});

router.all('/recruitment', function(req, res, next) {
    res.render('recruitment');
});

module.exports = router;
