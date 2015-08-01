/**
 * Created by qiaojoe on 15-7-28.
 */

var myUtil = require('../../common/utils');
var product = require('../../model/product');
var variety = require('../../model/productVariety');


module.exports.productlist = function(req, res) {

    product.fetchProductName(function(err, results) {
        if(!err) {
            res.render(myUtil.getView('productlist'), {product : results});
        } else {
            console.log(err.message);
            res.render('error');
        }
    });

};

module.exports.preaddproduct = function(req, res) {

    variety.fetchProductVariety(function(err, results) {
        if(!err) {
            res.render(myUtil.getView('perAddProduct'), {variety : results});
        } else {
            console.log(err.message);
            res.render('error');
        }
    });
};

module.exports.addproduct = function(req, res) {

    var vid = req.body.variety ? req.body.variety : 0;
    var name = req.body.name ? req.body.name : '';
    var detail = req.body.detail ? req.body.detail : '';
    var fileName = '';
    if (req.files.upload) {
        fileName = req.files.upload.name;
    }
    product.insertProduct(vid,name,detail,fileName,function(err, results){
        if(!err) {
            res.redirect('/admin/productlist');
        } else {
            console.log(err.message);
            res.render('error');
        }
    });
};

module.exports.productdel = function(req, res) {

    var pid = req.query.id ? req.query.id : 0;
    product.delProduct(pid, function(err, results) {
        if (!err) {
            res.redirect('/admin/productlist');
        } else {
            console.log(err.message);
            res.render('error');
        }
    });
};

module.exports.modifyproduct = function(req, res) {

    var pid = req.query.id ? req.query.id : 0;
    product.fetchProduct(pid, function(err, results) {
        var product = {};
        if (!err) {
            product = results[0];
        } else {
            console.log(err.message);
            res.render('error');
        }
        variety.fetchProductVariety(function(err, results) {
            if (!err) {
                res.render(myUtil.getView('modifyProduct'), {variety : results, product : product});
            } else {
                console.log(err.message);
                res.render('error');
            }
        });
    });
}

module.exports.updateproduct = function(req, res) {

    var id = req.body.id ? req.body.id : 0;
    var variety = req.body.variety ? req.body.variety : 0;
    var name = req.body.name ? req.body.name : '';
    var detail = req.body.detail ? req.body.detail :'';
    var fileName = '';
    if (req.files.upload) {
        fileName = req.files.upload.name;
    }

    product.updateProduct(id,variety,name,detail,fileName,function(err,results){
        if (!err) {
            res.redirect('/admin/productlist');
        } else {
            console.log(err.message);
            res.render('error');
        }
    });
}
