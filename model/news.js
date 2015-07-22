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
    var end = start + pages;
    var sql = 'SELECT * FROM news LIMIT ?, ?';
    db.query(sql, [start, end], function (cbData, err, rows, fields) {
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
module.exports.modifyNews = function (newsId, title, summary, content, image, cb) {

    var sql = 'UPDATE news SET title = ?, summary = ?, content = ?, image = ? WHERE id = ?';

    db.query(sql, [title, summary, content, image, newsId], function (cbData, err, rows, fields) {
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
