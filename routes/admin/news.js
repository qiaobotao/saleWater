/**
 * Created by qiaojoe on 15-7-23.
 */


var myUtil = require('../../common/utils');
var news = require('../../model/news');
var moment = require('moment');

module.exports.newslist = function(req, res) {

    var page = req.query.page ? req.query.page : 0;
    var count = req.query.count ? req.query.count : 10;

    news.fetchNews(page, count, function(err, results){
        if (!err) {
            moment.locale('zh-cn');
            for (var i=0;i<results.length;i++) {
                results[i].dateline = moment(results[i].dateline).endOf('hour').fromNow();
            }
            res.render(myUtil.getView('main'), {news : results});
        } else {
            console.log(err.message);
            res.render('error');
        }
    });
};

module.exports.newsdel = function(req, res) {

    var id = req.query.id ? req.query.id : 0;

    news.delNews(id,function(err, results){
        if (!err) {
            res.redirect('/admin/newslist');
        } else {
            console.log(err.message);
            res.render('error');
        }
    });
}

module.exports.newsadd = function(req, res) {

    var  title = req.body.title ? req.body.title : '';
    var summary = req.body.summary ? req.body.summary : '';
    var content = req.body.content ? req.body.content : '';
    var fileName = '';
    if (req.files.upload) {
        fileName = req.files.upload.name;
    }
    news.insertNews(title,summary,content,fileName,function(err, results){
        if (!err) {
            res.redirect('/admin/newslist');
        } else {
            console.log(err.message);
            res.render('error');
        }
    });
};

module.exports.modifynews = function(req, res) {

    var nid = req.query.id ? req.query.id : 0;

    news.fetchSingleNews(nid,function(err, results){

        if (!err) {
            res.render(myUtil.getView('modifyNews'), {news : results[0]});
        } else {
            console.log(err.message);
            res.render('error');
        }
    });
};

module.exports.updatanews = function(req, res) {

    var id = req.body.id ? req.body.id : 0;
    var title = req.body.title ? req.body.title : '';
    var summary = req.body.summary ? req.body.summary : '';
    var content = req.body.content ? req.body.content : '';
    var fileName = '';
    if (req.files.upload) {
        fileName = req.files.upload.name;
    }
    news.updataNews(id,title,summary,content,fileName,function(err, results){

        if (!err) {
            res.redirect('/admin/newslist');
        } else {
            console.log(err.message);
            res.render('error');
        }

    });
};

