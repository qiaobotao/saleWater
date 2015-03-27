/**
 * Created by qiaojoe on 15-3-26.
 */

var routes = require('./routes/index');
var users = require('./routes/users');


exports.route = function(app){
    app.use('/', routes);
    app.use('/users',users);
}

