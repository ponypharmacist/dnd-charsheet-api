let actions = {};

actions.list = (req, res) => {
  res.sendFile('index.html');
};

module.exports = actions;
