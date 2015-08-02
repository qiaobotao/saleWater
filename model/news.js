/**
 * Created by qiaojoe on 15-7-21.
 */

var db = require('../common/db');

/**
 * 插入新闻
 * @param title
 * @param summary
 * @param content
 * @param image
 * @param cb
 */
module.exports.insertNews = function(title, summary, content, image, cb) {

    var sql = 'INSERT INTO news (title, summary, content, dateline, image) VALUES (?,?,?,?,?)';
    db.query(sql, [title, summary, content, new Date().getTime(), image], function(cbData, err, rows, fields) {
        if (!err) {
            cb(null, rows);
        } else {
            cb(err);
        }
    });
};

/**
 *获取新闻
 * @param pages
 * @param count
 * @param cb
 */
module.exports.fetchNews = function (pages, count, cb) {

    var start = pages * count;
    var end = start + count;
    var sql = 'SELECT * FROM news ORDER BY dateline DESC LIMIT ?, ?';
    db.query(sql, [start, end], function (cbData, err, rows, fields) {
        if (!err) {
            cb(null, rows);
        } else {
            cb(err);
        }
    });
}

/**
 * 新闻详情页面下的三条信息，根据获取排序小于该id的
 * 三条新闻
 * @param id
 * @param cb
 */
module.exports.fetchThreeNews = function (id, cb) {

    var sql = 'SELECT * FROM news WHERE id < ? ORDER BY id desc LIMIT 3';
    db.query(sql, [id], function (cbData, err, rows, fields) {
        if (!err) {
            cb(null, rows);
        } else {
            cb(err);
        }
    });
}

/**
 * 获取所有新闻
 * @param cb
 */
module.exports.fetchAllNews = function(cb) {

    var sql = 'SELECT * FROM news ORDER BY dateline DESC ';
    db.query(sql, [], function (cbData, err, rows, fields) {
        if (!err) {
            cb(null, rows);
        } else {
            cb(err);
        }
    });
}

/**
 * 修改新闻
 * @param newsId
 * @param title
 * @param summary
 * @param content
 * @param image
 * @param cb
 */
module.exports.updataNews = function (newsId, title, summary, content, image, cb) {

    var sql = 'UPDATE news SET title = ?, summary = ?, content = ? WHERE id = ?';
    var par = [title, summary, content, newsId];
    if (image != '') {
        sql = 'UPDATE news SET title = ?, summary = ?, content = ?, image = ? WHERE id = ?';
        par = [title, summary, content, image, newsId];
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
 * 删除新闻
 * @param newsId
 * @param cb
 */
module.exports.delNews = function (newsId, cb) {

    var sql = 'DELETE FROM news WHERE id = ?';
    db.query(sql, [newsId], function(cbData, err, rows, fields) {
        if (!err) {
            cb(null, rows);
        } else {
            cb(err);
        }
    });
}

/**
 * 获取新闻详情
 * @param nid
 * @param cb
 */

module.exports.fetchSingleNews =function (nid, cb) {

    var sql = 'SELECT * FROM news WHERE id = ?';
    db.query(sql, [nid],  function(cbData, err, rows, fields) {

        if (!err) {
            cb(null, rows);
        } else {
            cb(err);
        }
    });
}
