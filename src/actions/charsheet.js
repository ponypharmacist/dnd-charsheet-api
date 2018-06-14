const mongoose = require('mongoose');
const model = mongoose.model('Charsheet');

let actions = {};

actions.list = (req, res) => {
	model.find({})
		.then(charsheets => res.status(200).json(charsheets))
		.catch(error => res.status(500).json(error))
};

actions.create = (req, res) => {
	model.create(req.body)
		.then(user => res.json(user))
		.catch(error => res.status(500).json(error))
};

actions.searchById = (req, res) => {
	model.findById(req.params.id)
		.then(charsheet => res.status(200).json(charsheet))
		.catch(error => res.status(404).json(error))
};

actions.deleteById = (req, res) => {
	model.remove({_id: req.params.id})
		.then(() => res.status(200))
		.catch(() => res.status(404).json(error))
};

actions.update = (req, res) => {
	model.findByIdAndUpdate(req.params.id, req.body)
		.then(charsheet => res.status(200).json(charsheet))
		.catch(error => res.status(404).json(error))
};

module.exports = actions;
