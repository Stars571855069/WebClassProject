var mysql = require('mysql');
var express = require('express');
var router = express.Router();




var dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '86456343',
    database: 'aimaijidatabase'
});



router.get('/', function(req, res, next) {
    dbConnection.query('SELECT * FROM userinfo',function (err, result) {
        if (err) {
            res.send("无法从数据库中读取用户信息！");
            dbConnection.end();
        }
        else{

            res.render('Profile',{ title:"个人信息",userinfo:result[0]});

        }
    });

});

module.exports = router;