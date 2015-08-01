/**
 * Created by qiaojoe on 15-7-23.
 */

module.exports = {

    // 服务器配置
    server: {
        port: 3000,
        develop: true
    },

    // 数据库连接池配置
    dbConfig: {
        host     : '*.*.*.*',
        database : 'higuo',
        user     : 'root',
        password : 'q1w2e3',
        port     : 3306,
        connectionLimit : 50
    },

    // 数据库连接池配置(开发版)
    dbConfig_develop: {
        host     : 'localhost',
        database : 'higuo',
        user     : 'root',
        password : '',
        port     : 3306,
        connectionLimit : 50
    }

};
