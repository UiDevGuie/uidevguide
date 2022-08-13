var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('User Worked with ne packages');
});

module.exports = router;
