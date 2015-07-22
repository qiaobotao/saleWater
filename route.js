/**
 * Created by qiaojoe on 15-3-26.
 */

var routes = require('./routes/index');
var admin = require('./routes/admin');


exports.route = function(app){
    app.use('/', routes);
    app.use('/admin',admin);
}

