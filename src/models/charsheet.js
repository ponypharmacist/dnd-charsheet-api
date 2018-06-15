var mongoose = require('mongoose');

// The permitted SchemaTypes are: String, Number, Date, Boolean, Array, Map
var schema = mongoose.Schema({
	characterName: {
		type: String,
		required: false
	},
	race: {
		type: String,
		required: false
	},
	class: {
		type: String,
		required: false
	},
	level: {
		type: Number,
		required: false
	},
	background: {
		type: String,
		required: false
	},
	alignment: {
		type: String,
		required: false
	},
	strength: {
		type: Number,
		required: false
	},
	dexterity: {
		type: Number,
		required: false
	},
	constitution: {
		type: Number,
		required: false
	},
	intelligence: {
		type: Number,
		required: false
	},
	wisdom: {
		type: Number,
		required: false
	},
	charisma: {
		type: Number,
		required: false
	}
});

mongoose.model('Charsheet', schema);
