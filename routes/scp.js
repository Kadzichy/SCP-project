var express = require('express')
var router = express.Router()
var scp = require("../models/scp").scp
var async = require("async")

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Новый маршрутизатор, для маршрутов, начинающихся с god')
});

/* Страница scp */
router.get('/:nick', function(req, res, next) {
    async.parallel([
            function(callback){
                scp.findOne({nick:req.params.nick}, callback)
            },
            function(callback){
                scp.find({},{_id:0,title:1,nick:1},callback)
            }
        ],
        function(err,result){
            if(err) return next(err)
            var scp = result[0]
            var scp = result[1] || []
            if(!scp) return next(new Error("Нет такого объекта"))
            res.render('scp', {
                title: scp.title,
                picture: scp.avatar,
                desc: scp.desc,
                menu: scp
            });
        })
})

module.exports = router
