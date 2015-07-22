/**
 * 小工具模块
 * Created by lupeipei on 15/2/3.
 */

var crypto = require('crypto');
var util = require('util');

/**
 * AES加密
 * @param str 明文
 * @param secret 加密密钥
 * @returns {*}
 */
exports.encrypt = function (str, secret) {
    var cipher = crypto.createCipher('aes192', secret);
    var enc = cipher.update(str, 'utf8', 'hex');
    enc += cipher.final('hex');
    return enc;
};

/**
 * AES解密
 * @param str 密文
 * @param secret 解密密钥
 * @returns {*}
 */
exports.decrypt = function (str, secret) {
    var decipher = crypto.createDecipher('aes192', secret);
    var dec = decipher.update(str, 'hex', 'utf8');
    dec += decipher.final('utf8');
    return dec;
};

/**
 * 判断参数是否为数字
 * @param v 要检查的参数
 * @returns {boolean}
 */
exports.isNum = function (v) {
    if (v != null && v != "") {
        return !isNaN(v);
    }
    return false;
};

/**
 * 深拷贝对象
 * @param {Object} 原始对象
 * @returns {Object} 拷贝后的对象
 */
exports.deepClone = function (obj) {
    if (obj == null) {
        return obj;
    }

    var t = typeof(obj);
    if (t == 'undefined' || t == 'string' || t == 'number' || t == 'boolean' || t == 'function') {
        return obj;
    } else if (util.isArray(obj)) {
        var array = new Array();
        for (var i = 0; i < obj.length; ++i) {
            array.push(this.deepClone(obj[i]));
        }
        return array;
    } else if (t == 'object') {
        var o = {};
        for (var v in obj) {
            o[v] = this.deepClone(obj[v]);
        }
        return o;
    }

    return null;
};
