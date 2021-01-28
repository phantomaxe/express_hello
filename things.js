var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.send('GET router on things.' + req.params.id );
});

router.post('/',function(req, res){
    res.send('POST router on things.');
});

module.exports = router;