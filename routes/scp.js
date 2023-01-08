var express = require('express');
var router = express.Router();
var db = require('../mySQLConnect.js');
//var checkAuth = require("./../middleware/checkAuth.js")
//var async = require("async")

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Новый маршрутизатор, для маршрутов, начинающихся с scps');
});

/* Страница ведущих */
router.get('/:nick' , function(req, res, next) {
    db.query(`SELECT * FROM scps WHERE scps.nick = '${req.params.nick}'`, (err, scps) => {
        if(err) {
        console.log(err);
        if(err) return next(err)
        }else {
            if(err) return next(err)
            if(scps.lenght == 0) return next(new Error("Нет такого обьекта"))
            var scp = scps[0];
            res.render('god', {
                title: scp.title,
                picture: scp.avatar,
                desc: scp.about
                })
            }
        })
    })
    



module.exports = router;
