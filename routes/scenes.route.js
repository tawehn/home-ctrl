var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('Gets all scenes');
});

router.get('/:name', function(req, res) {
  res.send('Gets the scene named: '+req.params.name);
});

router.put('/:name', function(req, res) {
  res.send('Updates the configuration for the scene named: '+req.params.name);
});

router.get('/:name/active', function(req, res) {
  res.send('Gets whether the scene named: '+req.params.name+' is active');
});

router.put('/:name/active', function(req, res) {
  res.send('Activates the scene named: '+req.params.name);
});

router.delete('/:name/active', function(req, res) {
  res.send('Deactivates the scene named: '+req.params.name);
});
module.exports = router;
