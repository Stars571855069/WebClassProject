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
    dbConnection.query('SELECT * FROM typeinfo',function (err, result) {
        if (err) {
            res.send("无法从数据库中读取类型信息！");
            dbConnection.end();
        }
        else{

            res.render('ShopItemType',{title:"品牌分类", itemtype:result});

        }
    });

});


router.post('/', function(req, res, next)
{

    var infogoto=req.body.brandname;

    var dbConnection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '86456343',
        database: 'aimaijidatabase'
    });
    console.log(infogoto);
    var sql = ("select * from iteminfo where itembrand = '"+infogoto+"' ");
    dbConnection.query(sql,function (err,results) {
        if(err)
        {
            throw err;

        }
        else {
            console.log(results);
            if (results[0]) {

                res.render('ItemBought',{title:"品牌商品",goods:results});
                //     res.redirect('/SearchResults');

            }
            else res.send( '<script>alert("未找到该品牌的手机");window.location.href="/ShopItemType"</script>');
        }
    });
    dbConnection.end(function () {
        console.log("end connect");
    });
});


module.exports = router;