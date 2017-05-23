import { combineReducers } from 'redux';
import home from './home';
import { routerReducer } from 'react-router-redux';

var rootReducers = combineReducers({
    home,
    routing: routerReducer
});
export default rootReducers;