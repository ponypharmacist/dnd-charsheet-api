var mongoose = require('mongoose');

// The permitted SchemaTypes are: String, Number, Date, Boolean, Array, Map
var schema = mongoose.Schema({
	name: { type: String, required: false },
	level: {	type: Number,	required: false },
	race: { type: String,	required: false	},
	subrace: {	type: String,	required: false },
	clas: {	type: String,	required: false },
	background: { type: String,	required: false },

	strength: { type: Number,	required: false },
	dexterity: {	type: Number,	required: false },
	constitution: { type: Number, required: false },
	intelligence: { type: Number, required: false },
	wisdom: { type: Number, required: false },
	charisma: { type: Number, required: false },

	languages: { type: String, required: false },
	feats: { type: Array, required: false },
	proficienciesCombat: { type: String, required: false },
	skills: { type: Array, required: false },
	tools: { type: String, required: false },

	maxHealth: { type: Number, required: false },
	healthBonusFromFeats: { type: Number, required: false },
	currentHealth: { type: Number, required: false },
	speed: { type: Number, required: false },
	gold: { type: Number, required: false },
	items: { type: String, required: false },

	armor: { type: String, required: false },
	shield: { type: Boolean, required: false },
	weaponMelee: { type: String, required: false },
	weaponMelee2: { type: String, required: false },
	weaponRanged: { type: String, required: false }
});

mongoose.model('Charsheet', schema);
