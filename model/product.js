/**
 * Created by qiaojoe on 15-7-21.
 */

var db = require('../common/db');

/**
 * 插入产品
 * @param vid
 * @param name
 * @param detail
 * @param image
 * @param cb
 */
module.exports.insertProduct = function(vid, name, detail, image, cb) {

    var sql = 'INSERT INTO product (vid, name, detail, dateline, image) VALUES (?,?,?,?,?)';
    db.query(sql, [vid, name, detail, new Date().getTime(), image], function(cbData, err, rows, fields) {
        if (!err) {
            cb(null, rows);
        } else {
            cb(err);
        }
    });
};

/**
 * 获取产品详情
 * @param pid
 * @param cb
 */
module.exports.fetchProduct = function (pid, cb) {

    var sql = 'SELECT * FROM product WHERE id = ?';
    db.query(sql, [pid], function (cbData, err, rows, fields) {
        if (!err) {
            cb(null, rows);
        } else {
            cb(err);
        }
    });
}

/**
 * 获取产品名称和分类
 * @param cb
 */
module.exports.fetchProductName = function (cb) {

    var sql = 'SELECT v.id,v.name AS vname,p.id,p.name AS pname FROM proVariety v, product p WHERE v.id = p.vid';
    db.query(sql, [], function (cbData, err, rows, fields) {
        if (!err) {
            cb(null, rows);
        } else {
            cb(err);
        }
    });
}

/**
 * 修改产品
 * @param pid
 * @param vid
 * @param name
 * @param detail
 * @param image
 * @param cb
 */
module.exports.updateProduct = function (pid, vid, name, detail, image, cb) {

    var sql = 'UPDATE product SET vid = ?, name = ?, detail = ?, image = ? WHERE id = ?';
    var par = [vid, name, detail, image, pid];

    if (image == '') {
        sql = 'UPDATE product SET vid = ?, name = ?, detail = ? WHERE id = ?';
        par = [vid, name, detail, pid];
    }

    db.query(sql, par, function (cbData, err, rows, fields) {
        if (!err) {
            cb(null, rows);
        } else {
            cb(err);
        }
    });
}

/**
 * 删除产品
 * @param pid
 * @param cb
 */
module.exports.delProduct = function (pid, cb) {

    var sql = 'DELETE FROM product WHERE id = ?';
    db.query(sql, [pid], function(cbData, err, rows, fields) {
        if (!err) {
            cb(null, rows);
        } else {
            cb(err);
        }
    });
}