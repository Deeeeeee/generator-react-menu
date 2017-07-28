module.exports = {
	path: 'game',
	getComponent(location, cb) {
		require.ensure([], (require) => {
			cb(null, require('../../../containers/solution/game').default);
		});
	}
};