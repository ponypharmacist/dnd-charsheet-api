module.exports = (src) => {

	const action = src.actions.charsheet;

	src.get('/charsheets', action.list);

	src.post('/charsheets/create', action.create);

	src.put('/charsheets/update/:id', action.update);

	src.get('/charsheets/select/:id', action.searchById);

	src.delete('/charsheets/delete/:id', action.deleteById);
};
