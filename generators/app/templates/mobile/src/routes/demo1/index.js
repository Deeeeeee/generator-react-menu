module.exports = {
	path: 'caseList',
	childRoutes: [
		require('./caseDetail')
	],
	indexRoute: {
		getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../../containers/case/caseList').default);
			})
		}
	}
};