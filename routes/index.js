var express = require('express');
var router = express.Router();

var view = require('./view');

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

router.all('/proIndex', function(req, res, next){
    res.render('proIndex')
});

router.all('/news', view.news);

router.all('/newsshow', view.newsshow);

router.all('/protree', view.protree);

router.all('/prodetail', view.prodetail);

module.exports = router;
