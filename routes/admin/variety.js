/**
 * Created by qiaojoe on 15-7-27.
 */


var myUtil = require('../../common/utils');
var variety = require('../../model/productVariety');

module.exports.varietylist = function(req, res) {

    variety.fetchProductVariety(function(err, results) {
        if (!err) {
            res.render(myUtil.getView('varietylist'), {variety : results});
        } else {
            console.log(err.message);
            res.render('error');
        }
    });
};

module.exports.addvariety = function(req, res) {

    var name = req.body.name ? req.body.name : '';

    variety.insertProductVariety(name,'','',function(err, results) {

        if (!err) {
            res.redirect('/admin/varietylist');
        } else {
            console.log(err.message);
            res.render('error');
        }

    });
}

module.exports.varietydel = function(req, res) {

    var id = req.query.id ? req.query.id : 0;

    variety.delVariety(id,function(err, results){
        if (!err) {
            res.redirect('/admin/varietylist');
        } else {
            console.log(err.message);
            res.render('error');
        }
    });
}