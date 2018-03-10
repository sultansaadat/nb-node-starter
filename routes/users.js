var express = require('express');
var router = express.Router();
var fs = require('fs');
var request = require('request');
/* GET users listing. */
router.get('/bot', function(req, res, next) {
    fs.readFile('./bot.json', { encoding: 'utf8' }, function(err, data) {
        console.log(data);
        res.send(data);
    });

});

router.get('/cluster-data', function(req, res, next) {
    request('http://leader.mesos:8080/v2/info', function(error, response, body) {
        res.send(body);
    });
})
module.exports = router;