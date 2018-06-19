var mongoose = require('mongoose');

// The permitted SchemaTypes are: String, Number, Date, Boolean, Array, Map
var schema = mongoose.Schema({
	characterName: {
		type: String,
		required: false
	},
	characterGender: {
		type: String,
		required: false
	},
	characterRace: {
		type: String,
		required: false
	},
	characterSubrace: {
		type: String,
		required: false
	},
	characterClass: {
		type: String,
		required: false
	},
	characterLevel: {
		type: Number,
		required: false
	},
	characterBackground: {
		type: String,
		required: false
	},
	characterAlignment: {
		type: String,
		required: false
	},
	characterStrength: {
		type: Number,
		required: false
	},
	characterDexterity: {
		type: Number,
		required: false
	},
	characterConstitution: {
		type: Number,
		required: false
	},
	characterIntelligence: {
		type: Number,
		required: false
	},
	characterWisdom: {
		type: Number,
		required: false
	},
	characterCharisma: {
		type: Number,
		required: false
	},
	characterLanguages: {
		type: Array,
		required: false
	},
	characterFeats: {
		type: Array,
		required: false
	},
	characterProficiencies: {
		type: Array,
		required: false
	},
	characterMaxHealth: {
		type: Number,
		required: false
	},
	characterCurrentHealth: {
		type: Number,
		required: false
	}
});

mongoose.model('Charsheet', schema);
