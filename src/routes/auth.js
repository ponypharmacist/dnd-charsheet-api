module.exports = (src) => {

	const action = src.actions.auth;

	src.post('/login', action.login);

  /**  route to authenticate the user using Json Web Token
   *
   * app.use('/*', api.verifyToken);
   */

};
