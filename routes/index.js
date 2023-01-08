var express = require('express')
var router = express.Router()
var db = require("../mySQLConnect.js");




router.get('/', function(req, res, next) {
  res.render('index', { title: 'SCP', counter:req.session.counter  });
});

/* GET login/registration page. */
router.get('/logreg', function(req, res, next) {
res.render('logreg',{title: 'Вход', error: null});
});

/* POST login/registration page. */
router.post('/logreg', function(req, res, next) {
  var username = req.body.username
  var password = req.body.password
  // console.log("hey")
  db.query (`SELECT * FROM user WHERE user.username = '${req.body.username}'`, function(err,users){
        if(err) return next(err)
        // console.log("hey1")
        // console.log(users)
        // console.log(err)
        if(users.length > 0) {
          // console.log("hey3")
          var user = users[0];
          if (password == user.password){
            req.session.user = user.user_id
            res.redirect('/')
          } else {
            res.render('logreg', {title: 'Вход', error: 'Пароль не верный'})
          }
        } else {
          db.query(`INSERT INTO user (username, password) VALUES ('${username}', '${password}')`, function(err, user){
            // console.log(user)
            // console.log(err)
            if(err) return next(err)
            req.session.user = user.user_id
            res.redirect('/')
          })
        }
})
});
module.exports = router;



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
