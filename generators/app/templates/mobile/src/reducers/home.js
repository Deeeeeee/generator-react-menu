import * as types  from '../constants/homeTypes';
import { getItem } from '../utils';

const initialObject = {
    bannerList: [],
    weather: {}
};
const initialState = getItem('home') || initialObject;
export default function home(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_WEATHER:
            return {
                ...state,
                weather: action.weather
            };
        default:
            return state;
    }
}