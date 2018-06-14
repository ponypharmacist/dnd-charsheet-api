var mongoose = require('mongoose');

var schema = mongoose.Schema({
	project: {
		type: String,
		required: false
	},
	description: {
		type: String,
		required: false
	},
	demoLink: {
		type: String,
		required: false
	},
	author: {
		type: String,
		required: false
	},
	status: {
		type: String,
		required: false
	}
});

mongoose.model('Project', schema);
