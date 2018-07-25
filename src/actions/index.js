let actions = {};

actions.list = (req, res) => {
	res.sendFile(path.join(__dirname + '/index.html'));
};

module.exports = actions;
