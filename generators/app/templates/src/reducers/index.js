import { combineReducers } from 'redux';
import home from './home';
import user from './user';
import { routerReducer } from 'react-router-redux';

var rootReducers = combineReducers({
    home,
    user,
    routing: routerReducer
});
export default rootReducers;