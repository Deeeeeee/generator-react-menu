module.exports = {
	path: 'baby',
	getComponent(location, cb) {
		require.ensure([], (require) => {
			cb(null, require('../../../containers/solution/baby').default);
		});
	}
};