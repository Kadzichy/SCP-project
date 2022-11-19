var express = require('express');
var router = express.Router();

/* Страница SCP-191 */
router.get('/SCP-191', function(req, res, next) {
  res.send("<h1>Страница SCP-191</h1>")
});

/* Страница SCP-005 */
router.get('/SCP-005', function(req, res, next) {
  res.send("<h1>Страница SCP-005</h1>")
});

/* Страница SCP-808 */
router.get('/SCP-808', function(req, res, next) {
  res.send("<h1>Страница SCP-808</h1>")
});


module.exports = router;
