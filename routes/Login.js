var express = require('express');
var router = express.Router();
var mysql = require('mysql');


router.get('/', function(req, res, next) {
    res.render('Login', { title: '登录' });
});


router.post('', function(req, res, next)
{

    var loginusername=req.body.lgusername;
    var loginpassword=req.body.lgpassword;

    var dbConnection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '86456343',
        database: 'aimaijidatabase'
    });

    var sql = ("select * from userinfo where username ='"+loginusername+"' and password = '"+loginpassword+"'" );
    dbConnection.query(sql,function (err,results) {
        if(err)
        {
            throw err;

        }
        else {
            console.log(results);
            if (results[0]){
                if(results[0].username === loginusername && results[0].password === loginpassword)
                {
                    //res.render('layout',{user:results[0]});
                    //res.render(
                    //    '<script>var hidecontent=document.getElementsByClassName("loginNav");hidecontent.style.display="none";' +
                     //   'var displaycontent=document.getElementsByClassName(profile);displaycontent.style.display="block"</script>');
                      req.session.user=results[0];
                    res.render('Profile',{  title: '个人信息',userinfo:results[0]});

                    console.log(req.session.user);
                }
                else{
                    res.send( '<script>alert("用户名或密码错误！");window.location.href="/Login"</script>');
                }
            }
            else res.send( '<script>alert("用户名或密码错误！");window.location.href="/Login"</script>');
        }
    });
    dbConnection.end(function () {
        console.log("end connect");
    });
});

module.exports = router;
