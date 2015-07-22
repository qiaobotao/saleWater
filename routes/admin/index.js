/**
 * Created by qiaojoe on 15-7-21.
 */

var express = require('express');
var router = express.Router();

router.all('/', function(req, res, next) {
    res.send('ceshi');
});


module.exports = router;


