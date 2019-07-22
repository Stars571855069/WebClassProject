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
    dbConnection.query('SELECT * FROM usercart',function (err, result) {
        if (err) {
            res.send("无法从数据库中读取购物车信息！");
            dbConnection.end();
        }
        else{

            res.render('Cart',{
                title:"购物车",

                    cartitem:result
            }

                    );
        }
    });
});





//删除物品
router.post('/' ,function(req, res, next)
{

    var deleteitem=req.body.deleteitem;

    var dbConnection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '86456343',
        database: 'aimaijidatabase'
    });
    console.log(deleteitem);
    var sql = ("DELETE from usercart where itemname = '"+deleteitem+"' ");
    dbConnection.query(sql,function (err,results) {
        if(err)
        {
            throw err;

        }
        else {
            console.log(results);
            res.send( '<script>alert("删除成功！");window.location.href="/Cart"</script>');
            //     res.redirect('/SearchResults');

        }
    });
    dbConnection.end(function () {
        console.log("end connect");
    });
});


module.exports = router;