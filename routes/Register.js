var mysql = require('mysql');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('Register', { title: '注册' });
});



    router.post('/regist', function(req, res, next)
    {

        var adduser_name=req.body.tusername;
        var addpassword=req.body.tpassword;
        var conpassword=req.body.passwordCon;

        var dbConnection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '86456343',
            database: 'aimaijidatabase'
        });
        if(addpassword!==conpassword){
            res.send( '<script>alert("确认密码必须相同！");window.location.href="/Register"</script>');
        }
        else{

        dbConnection.query('INSERT INTO userinfo SET ?', {
                username: adduser_name,
                password: addpassword,
                selfinst:"该用户还没有个人介绍......"
            },
            function (err, result) {

            if (err) {
                res.send("注册失败");
                dbConnection.end();
            }
            else {
                res.send( '<script>alert("注册成功！");window.location.href="/"</script>');
                dbConnection.end();
            }
        } );

        }

    });

module.exports = router;
