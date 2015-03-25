var express = require('express');
var router = express.Router();
var item = require('../models/item.js');

/* GET home page. */
router.get('/sports', function(req, res){
	res.render('sports.html');
});

router.get('/sports/items', function(req, res){
	item.find({}, function(err, items){
		res.json(items);
	});
});

module.exports = router;
