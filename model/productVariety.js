/**
 * Created by qiaojoe on 15-7-21.
 */

var db = require('../common/db');

/**
 * 添加产品类型
 * @param name
 * @param remarks
 * @param ordId
 * @param cb
 */
module.exports.insertProductVariety = function(name, remarks, ordId, cb) {

    var sql = 'INSERT INTO proVariety (name, remarks, ordId, dateline) VALUES (?,?,?,?)';
    db.query(sql, [name, remarks, ordId, new Date().getTime()], function(cbData, err, rows, fields) {
        if (!err && rows.length != 0) {
            cb(null, rows);
        } else {
            cb(err);
        }
    });
};

/**
 * 获取产品类型
 * @param cb
 */
module.exports.fetchProductVariety = function (cb) {

    var sql = 'SELECT * FROM proVariety ORDER BY ordId ';
    db.query(sql, [], function (cbData, err, rows, fields) {
        if (!err) {
            cb(null, rows);
        } else {
            cb(err);
        }
    });
}

/**
 * 修改产品种类
 * @param vId
 * @param name
 * @param cb
 */
module.exports.updateVariety = function (vId, name, cb) {

    var sql = 'UPDATE proVariety SET name = ?  WHERE id = ?';

    db.query(sql, [name, vId], function (cbData, err, rows, fields) {
        if (!err) {
            cb(null, rows);
        } else {
            cb(err);
        }
    });
}

/**
 * 删除种类
 * @param vId
 * @param cb
 */
module.exports.delVariety = function (vId, cb) {

    var sql = 'DELETE FROM proVariety WHERE id = ?';
    db.query(sql, [vId], function(cbData, err, rows, fields) {
        if (!err) {
            cb(null, rows);
        } else {
            cb(err);
        }
    });
}

/**
 * 根据id获取种类详情
 * @param vId
 * @param cb
 */
module.exports.fetchSingleVariety = function (vId, cb) {

    var sql = 'SELECT * FROM proVariety WHERE id = ?';

    db.query(sql, [vId], function(cbData, err, rows, fields) {

        if (!err) {
            cb(null, rows);
        } else {
            cb(err);
        }
    });
}
