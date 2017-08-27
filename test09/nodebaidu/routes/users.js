var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dataAddress = require('./dataAddress');
var moment  = require('moment');

var connection = mysql.createPool(dataAddress);


/* 后台路由页面*/
// 获取所有新闻列表
router.get('/getnews', function(req, res) {
    var status = '1';
    connection.query('SELECT * FROM `news` WHERE status = ? ORDER BY id DESC', [status], function(err, rows) {
        rows.forEach(function(item, index) {
            var dateStr = moment(item.newstime).format("YYYY-MM-DD");
            rows[index].newstime = dateStr;
        })
        res.json(rows);
    })
});

//模态框取值
router.get('/curnews', function(req, res) {
    var newsid = req.query.newsid;
    connection.query('SELECT * FROM `news` WHERE id = ?', [newsid], function(err, rows) {
         rows.forEach(function(item, index) {
            var dateStr = moment(item.newstime).format("YYYY-MM-DD");
            rows[index].newstime = dateStr;
        })
        res.json(rows);
    })
});

//插入
router.post('/insert', function(req, res) {
    var newstype = req.body.newstype.trim();
    var newstitle = req.body.newstitle.trim();
    var newsimg = req.body.newsimg.trim();
    var newstime = req.body.newstime.trim();
    var newssrc = req.body.newssrc.trim();
    var status = "1";
    connection.query('INSERT INTO news (newstitle,newstype,newsimg,newstime,newssrc,status) VALUES (?,?,?,?,?,?)', [newstitle, newstype, newsimg, newstime, newssrc, status], function(err, rows) {
        if (!err) {
            res.json(rows);
        }
    });
});

//确认更新
router.post('/update', function(req, res) {
    var newsid = req.body.id;
    var newstype = req.body.newstype;
    var newstitle = req.body.newstitle;
    var newsimg = req.body.newsimg;
    var newstime = req.body.newstime;
    var newssrc = req.body.newssrc;
    connection.query('UPDATE news  SET newstitle = ?,newstype = ?,newsimg = ?,newstime = ?,newssrc = ? WHERE id = ?', [newstitle, newstype, newsimg, newstime, newssrc, newsid], function(err, rows) {
        res.json(rows);
    });
});

//删除
router.post('/delete', function(req, res) {
    var newsid = req.body.newsid.trim();
    var status = '0';
    console.log(newsid);
    connection.query('UPDATE news SET status = ? WHERE id = ?', [status, newsid], function(err, rows) {
        res.json(rows);
    });
});

module.exports = router;
