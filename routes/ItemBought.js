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
            res.send("无法从数据库中读取商城信息！");
            dbConnection.end();
        }
        else{

            res.render('ItemBought',{title:"商城", goods:result});

        }
    });

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

    //and itemcommit.itemname = '"+infogoto+"'
    var sql = ("select * from iteminfo where iteminfo.itemname = '"+infogoto+"'");
    dbConnection.query(sql,function (err,results) {
        if(err)
        {
            throw err;

        }
        else {
            console.log(results);
            if (results[0]) {

                res.render('ItemInfo',{title:"商品详情",ItemInfo:results[0]});
                //     res.redirect('/SearchResults');

            }
            else res.send( '<script>alert("未找到该商品的详情页面");window.location.href="/ItemBought"</script>');
        }
    });



    dbConnection.end(function () {
        console.log("end connect");
    });
});
module.exports = router;

module.exports = router;