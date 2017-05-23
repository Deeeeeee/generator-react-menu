import * as types  from '../constants/homeTypes';
import { getItem } from '../utils';

const initialObject = {
    bannerList: []
};
const initialState = getItem('home') || initialObject;
export default function home(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_BANNER_LIST:
            return {
                ...state,
                bannerList: action.bannerList
            };
        default:
            return state;
    }
}