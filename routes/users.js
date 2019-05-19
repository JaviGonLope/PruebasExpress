var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('GET request to users page');
});


/* POST users listing. */
router.post('/', function (req, res, next) {
  res.send('POST request to users page');
});

// Ruta parametrizada con "id". Ej.: /users/1
router.get('/:id', 
  (req, res, next) => {
    console.log(`Validating access to user ${req.params.id} profile...`)
    next();
  }, 
  (req, res, next) => {
    res.send(`User ${req.params.id} profile...`)
  }
);

// Middleware específico de Users
router.use((req, res, next) => {
  console.log('We\'re in user\'s route specific middleware');
  console.log('Time: ', Date.now());
}) 

module.exports = router;
