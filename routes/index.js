var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  console.log('Home renderizada, ¿qué pasará después?')
  next();
});

module.exports = router;
