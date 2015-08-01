/**
 * Created by qiaojoe on 15-7-21.
 */

var express = require('express');
var router = express.Router();
var myUtil = require('../../common/utils');
var login = require('./login');
var news = require('./news');
var variety = require('./variety');
var product = require('./product');

router.all('/', function(req, res, next) {
    res.render(myUtil.getView('login'),{errinfo : ''});
});

router.all('/preaddnews', function(req, res, next) {
    res.render(myUtil.getView('preAddNews'));
});

router.all('/preaddvariety', function(req, res, next) {
    res.render(myUtil.getView('preAddVariety'));
});

router.all('/preaddproduct', product.preaddproduct);
router.all('/dologin', login.dologin);
router.all('/newslist', news.newslist);
router.all('/newsdel', news.newsdel);
router.all('/addnews', news.newsadd);
router.all('/varietylist', variety.varietylist);
router.all('/addvariety', variety.addvariety);
router.all('/varietydel', variety.varietydel);
router.all('/productlist', product.productlist);
router.all('/addproduct',product.addproduct);
router.all('/productdel', product.productdel);
router.all('/modifynews', news.modifynews);
router.all('/updatanews', news.updatanews);
router.all('/modifyvariety', variety.modifyVariety);
router.all('/updatevariety', variety.updatevariety);
router.all('/modifyproduct', product.modifyproduct);
router.all('/updateproduct', product.updateproduct);


module.exports = router;


