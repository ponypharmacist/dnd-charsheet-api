module.exports = (src) => {

	const action = src.actions.index;

	src.get('/', action.list);

};
