var mongoose = require('mongoose');

var itemSchema = mongoose.Schema({
	name: String,
	description: String,
	category: String,
	price: Number
});

module.exports = mongoose.model('Item', itemSchema);