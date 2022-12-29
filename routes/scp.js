var express = require('express')
var router = express.Router()
var scp = require("../models/scp").scp
var checkAuth = require("./../middleware/checkAuth.js")
//var async = require("async")

/* GET users listing. */
router.get('/:nick',checkAuth, function(req, res, next) {
    res.send('Новый маршрутизатор, для маршрутов, начинающихся с scps')
});

/* Страница scp */
router.get('/:nick', function(req, res, next) {
    scp.findOne({nick:req.params.nick}, function(err,scp){
        if(err) return next(err)
        if(!scp) return next(new Error("Нет такого объекта"))
        res.render('sco', {
            title: scp.title,
            picture: scp.avatar,
            desc: scp.desc
        })
    })
})


module.exports = router
