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

/* GET home page. */
    router.get('/', function(req, res, next) {
        dbConnection.query('SELECT * FROM iteminfo',function (err, result) {
            if (err) {
                res.send("无法从数据库中读取该商品信息！");
                dbConnection.end();
            }
            else{

                res.render('ItemInfo',{title:"商品详情",ItemInfo:result[0]});

            }
        });


    });

router.post('/', function(req, res, next)
{

    var additemname=req.body.buyname;
    var additemimageurl=req.body.buyimage;
    var additemprice=req.body.buyprice;

    var dbConnection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '86456343',
        database: 'aimaijidatabase'
    });

    dbConnection.query('INSERT INTO usercart SET ?', {
            itemname: additemname,
            itemimageurl: additemimageurl,
            itemprice:additemprice
        },
        function (err, result) {

            if (err) {
                res.send('<script>alert("添加失败！该商品已存在于你的购物车中！");window.location.href="/ItemInfo"</script>');
                dbConnection.end();
            }
            else {
                res.send( '<script>alert("添加成功！");window.location.href="/ItemInfo"</script>');
                dbConnection.end(); //关闭数据库连接
            }
        } );
});

module.exports = router;