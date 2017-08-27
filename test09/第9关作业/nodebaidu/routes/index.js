var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dataAddress = require('./dataAddress');
var moment	= require('moment');

/* 在主页获取新闻时的请求. */
router.get('/', function(req, res, next) {
    var newstype = req.query.newstype;
    //console.log(req.query.newstype);
    var connection = mysql.createConnection(dataAddress);
    connection.connect();
    var status = '1';
    connection.query('SELECT * FROM `news` WHERE `newstype` = ? AND status = ? ORDER BY id DESC', [newstype, status], function(err, rows, fileds) {
        rows.forEach(function(item, index) {
           	var dateStr = moment(item.newstime).format("YYYY-MM-DD");
           	rows[index].newstime = dateStr;
            //console.log(time);
        })
        res.json(rows);
    })
});

module.exports = router;
