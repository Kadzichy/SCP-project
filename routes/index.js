var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница SCP-191 */
router.get('/SCP-191', function(req, res, next) {
  res.render('SCP', {
      title: "SCP-191 - Ребёнок-киборг",
      picture: "images/SCP-191.jpg",
      desc: "SCP-191 - девочка примерно █ лет от роду. Считается, что она была подопытной в серии хирургических экспериментов, поставленных покойным д-ром █████ █████████"
  })
});

/* Страница SCP-005 */
router.get('/SCP-005', function(req, res, next) {
  res.render('SCP', {
      title: "SCP-005 - Отмычка",
      picture: "images/SCP-005.jpg",
      desc: "SCP-005 внешне напоминает изукрашенный ключ, по характеристикам не отличающийся от серийно выпускаемых ключей примерно 1920-х годов."
  })
});

/* Страница SCP-808 */
router.get('/SCP-808', function(req, res, next) {
  res.render('SCP', {
      title: "SCP-808 - Механический хор",
      picture: "images/SCP-808.jpg",
      desc: "SCP-808 представляет собой механическое сооружение высотой приблизительно в шестнадцать (16) метров и площадью приблизительно пять на шесть метров (30 м2). Форма объекта напоминает цилиндр, на последних трех метрах переходящий в конус."
  })
});


module.exports = router;
