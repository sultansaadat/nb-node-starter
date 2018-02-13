var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET users listing. */
router.get('/bot', function(req, res, next) {
   fs.readFile('./bot.json', { encoding: 'utf8' }, function(err, data) {
        console.log(data);
        res.send(data);
    });
  
});

module.exports = router;
