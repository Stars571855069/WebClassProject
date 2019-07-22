var mysql = require('mysql');
var express = require('express');
var router = express.Router();

/* GET home page. */


var dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '86456343',
    database: 'aimaijidatabase'
});



router.post('/', function(req, res, next)
{

    var infogoto=req.body.typename;

    var dbConnection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '86456343',
        database: 'aimaijidatabase'
    });
    console.log(infogoto);
    var sql = ("select * from userinfo where username = '"+infogoto+"' ");
    dbConnection.query(sql,function (err,results) {
        if(err)
        {
            throw err;

        }
        else {
            console.log(results);
            if (results[0]) {

                res.render('Profile',{title:"用户信息",userinfo:results[0]});
                //     res.redirect('/SearchResults');

            }
            else res.send( '<script>alert("未找到该用户的个人详情页面");window.location.href="/UserPage"</script>');
        }
    });
    dbConnection.end(function () {
        console.log("end connect");
    });
});
module.exports = router;
