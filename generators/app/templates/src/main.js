import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store/configureStore';
import throttle  from 'lodash/throttle';
import { saveState } from './utils';

const store = configureStore();
store.subscribe(throttle(() => {
    var state = store.getState();
    var keys = Object.keys(state);
    keys.forEach(key => {
        saveState(key, state[key]);
    });
}, 2000));
const history = syncHistoryWithStore(hashHistory, store);
const rootRoute = {
    path: '/',
    component: require('./containers/app'),
    indexRoute: require('./routes/indexRoute'),
    childRoutes: [
        // require('./routes/demo1'),
        // require('./routes/demo2'),
    ]
};

ReactDOM.render(
	<Provider store={ store } >
		<Router history={ history } routes={ rootRoute } />
	</Provider>,
	document.getElementById('app')
);