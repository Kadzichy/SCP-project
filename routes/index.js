var express = require('express')
var router = express.Router()
var scp = require("../models/scp").scp


/* GET home page. */
router.get('/', function(req, res, next) {
    scp.find({},{_id:0,title:1,nick:1},function(err,menu){
        req.session.greeting = "Hi!!!",
        res.cookie('greeting','Hi!!!').render('index', {
                                title: 'Express',
                                counter: req.session.counter,
                            });
                            
    })
});

/* GET login/registration page. */
router.get('/logreg', function(req, res, next) {
  res.render('logreg',{title: 'Вход'});
});

/* POST login/registration page. */
router.post('/logreg', function(req, res, next) {
  var username = req.body.username
  var password = req.body.password
  router.post('/logreg', function(req, res, next) {
  var username = req.body.username
  var password = req.body.password
  User.findOne({username:username},function(err,user){
      if(err) return next(err)
      if(user){
          if(user.checkPassword(password)){
              req.session.user = user._id
              res.redirect('/')
          } else {
                    res.render('logreg', {title: 'Вход'})
          }
      } else {
          var user = new User({username:username,password:password})
          user.save(function(err,user){
              if(err) return next(err)
              req.session.user = user._id
              res.redirect('/')
          })        
    }
  })
});


});



/*

router.get('/SCP-191', function(req, res, next) {
  res.render('SCP', {
      title: "SCP-191 - Ребёнок-киборг",
      picture: "images/SCP-191.jpg",
      desc: "SCP-191 - девочка примерно █ лет от роду. Считается, что она была подопытной в серии хирургических экспериментов, поставленных покойным д-ром █████ █████████"
  })
});


router.get('/SCP-005', function(req, res, next) {
  res.render('SCP', {
      title: "SCP-005 - Отмычка",
      picture: "images/SCP-005.jpg",
      desc: "SCP-005 внешне напоминает изукрашенный ключ, по характеристикам не отличающийся от серийно выпускаемых ключей примерно 1920-х годов."
  })
});


router.get('/SCP-808', function(req, res, next) {
  res.render('SCP', {
      title: "SCP-808 - Механический хор",
      picture: "images/SCP-808.jpg",
      desc: "SCP-808 представляет собой механическое сооружение высотой приблизительно в шестнадцать (16) метров и площадью приблизительно пять на шесть метров (30 м2). Форма объекта напоминает цилиндр, на последних трех метрах переходящий в конус."
  })
});
/*
 module.exports = router;
