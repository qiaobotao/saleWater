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
 * @param remarks
 * @param ordId
 * @param cb
 */
module.exports.modifyNews = function (vId, name, remarks, ordId, cb) {

    var sql = 'UPDATE proVariety SET name = ?, remarks = ?, ordId = ? WHERE id = ?';

    db.query(sql, [name, remarks, ordId, vId], function (cbData, err, rows, fields) {
        if (!err) {
            cb(null, rows);
        } else {
            cb(err);
        }
    });
}

/**
 * 删除产品
 * @param vId
 * @param cb
 */
module.exports.delNews = function (vId, cb) {

    var sql = 'DELETE FROM proVariety WHERE id = ?';
    db.query(sql, [vId], function(cbData, err, rows, fields) {
        if (!err) {
            cb(null, rows);
        } else {
            cb(err);
        }
    });
}
