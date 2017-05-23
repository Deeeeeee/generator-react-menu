module.exports = {
	path: 'solution',
	childRoutes: [
		require('./ECommerce'),
		require('./finance'),
		require('./newPopularize'),
		require('./appPopularize'),
		require('./wechatCommerce'),
		require('./soonSell'),
		require('./baby'),
		require('./game'),
	],
	indexRoute: {
		getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../../containers/solution/ECommerce').default);
			})
		}
	}
};