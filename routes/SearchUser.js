var mysql = require('mysql');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('SearchUser', { title: '搜索用户' });
});

router.post('/', function(req, res, next)
{

    var content=req.body.searchcontent;

    var dbConnection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '86456343',
        database: 'aimaijidatabase'
    });

    var sql = ("select * from userinfo where username LIKE '%"+content+"%' ");
    dbConnection.query(sql,function (err,results) {
        if(err)
        {
            throw err;

        }
        else {
            console.log(results);
            if (results[0]) {

                res.render('UserPage',{ title:"用户列表",user:results});
               //     res.redirect('/SearchResults');

            }
            else res.send( '<script>alert("未找到任何数据");window.location.href="/SearchUser"</script>');
        }
    });
    dbConnection.end(function () {
        console.log("end connect");
    });
});
module.exports = router;

