var mongoose = require('mongoose');

// The permitted SchemaTypes are: String, Number, Date, Boolean, Array, Map
var schema = mongoose.Schema({
	characterName: { type: String, required: false },
	characterLevel: {	type: Number,	required: false },
	characterRace: { type: String,	required: false	},
	characterSubrace: {	type: String,	required: false },
	characterClass: {	type: String,	required: false },
	characterBackground: { type: String,	required: false },

	characterStrength: { type: Number,	required: false },
	characterDexterity: {	type: Number,	required: false },
	characterConstitution: { type: Number, required: false },
	characterIntelligence: { type: Number, required: false },
	characterWisdom: { type: Number, required: false },
	characterCharisma: { type: Number, required: false },

	characterLanguages: { type: String, required: false },
	characterFeats: { type: Array, required: false },
	characterProficienciesCombat: { type: String, required: false },
	characterSkills: { type: Array, required: false },
	characterTools: { type: String, required: false },

	characterMaxHealth: { type: Number, required: false },
	healthBonusFromFeats: { type: Number, required: false },
	characterCurrentHealth: { type: Number, required: false },
	characterSpeed: { type: Number, required: false },
	characterGold: { type: Number, required: false },
	characterItems: { type: String, required: false }
});

mongoose.model('Charsheet', schema);
