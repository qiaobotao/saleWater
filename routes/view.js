
var news = require('../model/news');
var myUtil = require('../common/utils');
var moment = require('moment');
var variety = require('../model/productVariety');
var product = require('../model/product');

module.exports.news = function(req, res) {

      var baseUrl = 'http://'+req.headers.host;
      news.fetchAllNews(function(err, results) {

          if (!err) {
              moment.locale('zh-cn');
              for(var i=0;i<results.length;i++){
                  results[i].image = myUtil.getPath(baseUrl,results[i].image);
                  results[i].dateline = moment(results[i].dateline).endOf('hour').fromNow();
              }
              res.render('newsList', {news : results});
          } else {
              console.log(err.message);
              res.render('error');
          }
      });
}

module.exports.newsshow = function(req, res) {

    var baseUrl = 'http://' + req.headers.host;
    var id = req.query.id ? req.query.id : 0;

    news.fetchSingleNews(id, function(err, results){

        if (!err) {
            var newsDetail = results[0];
            moment.locale('zh-cn');
            newsDetail.dateline = moment(newsDetail.dateline).endOf('hour').fromNow();
            newsDetail.image = myUtil.getPath(baseUrl,results[0].image);

            news.fetchThreeNews(id, function(err, results) {
                if (!err) {
                    for(var i=0;i<results.length;i++) {
                        results[i].image =  myUtil.getPath(baseUrl,results[i].image)
                        results[i].dateline = moment(results[i].dateline).endOf('hour').fromNow();;
                    }
                    res.render('newsShow', {newsDetail : newsDetail, news : results});
                } else {
                    console.log(err.message);
                    res.render('error');
                }
            });

        } else {
            console.log(err.message);
            res.render('error');
        }
    });
}

module.exports.protree = function(req, res) {

     variety.fetchProductVariety(function(err, results){
         if (!err) {
             var varietys = results;
             product.fetchAllProduct(function(err, results){
                 if (!err) {
                     var products = results;
                     res.render('protree', {variety : varietys, product : products});
                 } else {
                     console.log(err.message);
                     res.render('error');
                 }
             });
         } else {
             console.log(err.message);
             res.render('error');
         }
     });

}

module.exports.prodetail = function(req, res) {

    var baseUrl = 'http://' + req.headers.host;
    var id = req.query.id ? req.query.id : 0;

    product.fetchProduct(id, function(err, results) {

        if (!err) {
            var product = results[0];
            product.image = myUtil.getPath(baseUrl,product.image);
            res.render('prodetail', {product : product});
        } else {
            consoel.log(err.message);
            res.render('error');
        }
    });
}

module.exports.indexnews = function(req, res) {

    var baseUrl = 'http://' + req.headers.host;
    news.fetchThreeNews(100000,function(err, results) {
        if (!err) {
            for(var i=0;i<results.length;i++) {
                results[i].image = myUtil.getPath(baseUrl,results[i].image);
            }
            res.render('index', {news : results});
        } else {
            consoel.log(err.message);
            res.render('error');
        }
    });
}
