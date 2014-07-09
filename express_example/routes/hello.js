var express = require('express');
var router = express.Router();

/* GET heloo page. */
router.get('/', function(req, res) {
  res.render('hello', { title: 'Saludo' })
});

module.exports = router;