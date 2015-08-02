/**
 * Created by qiaojoe on 15-7-22.
 */

module.exports.dologin = function (req, res) {

    var username = req.body.username;
    var password = req.body.password;
    var user = {
        username : username
    };

    req.session.user = user;

    if (username == 'admin' && password == '123456') {
        req.session.user = user;
        console.log(req.session);
        res.redirect('/admin/newslist');
    } else {
        res.redirect('/admin');
    }
}
