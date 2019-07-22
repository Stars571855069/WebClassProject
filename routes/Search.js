var mysql = require('mysql');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('Search', { title: '搜索' });
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

    var sql = ("select * from iteminfo where itemname LIKE '%"+content+"%' ");
    dbConnection.query(sql,function (err,results) {
        if(err)
        {
            throw err;

        }
        else {
            console.log(results);
            if (results[0]) {

                res.render('SearchResults',{title:"搜索结果",goods:results});


            }
            else res.send( '<script>alert("未找到任何数据");window.location.href="/Search"</script>');
        }
    });
    dbConnection.end(function () {
        console.log("end connect");
    });
});
module.exports = router;

