/*
var express = require('express');
var router = express.Router();
var scp = require("../models/scp").SCP
//var async = require("async")

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Новый маршрутизатор, для маршрутов, начинающихся с scp');
});

/* Страница scp */
router.get('/:nick', function(req, res, next) {
    SCP.findOne({nick:req.params.nick}, function(err,scp){
        if(err) return next(err)
        if(!scp) return next(new Error("Нет такого объекта"))
        res.render('scp', {
            title: scp.title,
            picture: scp.avatar,
            desc: scp.desc
        })
    })
});
/*

module.exports = router;
