var mongoose = require('mongoose');

var schema = mongoose.Schema({
	charsheet: {
		type: String,
		required: false
	},
	description: {
		type: String,
		required: false
	}
});

mongoose.model('Charsheet', schema);
