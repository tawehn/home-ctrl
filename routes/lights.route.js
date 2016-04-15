var express = require('express');
var router = express.Router();
var hueLogic = require('../logic/hue.logic');


router.get('/', function(req, res) {
  res.send('Gets state for all lights');
});

router.get('/:name', function(req, res) {
  res.send('Gets state for the light named: '+req.params.name);
});

router.put('/:name', function(req, res) {
  res.send('Updates state for the light named: '+req.params.name);
});

module.exports = router;
