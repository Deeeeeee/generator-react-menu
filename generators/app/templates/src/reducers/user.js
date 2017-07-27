import * as types  from '../constants/userTypes';
import { getItem } from '../utils';

const initialObject = {
    userInfo: {},
    noticeFlag: true,
    isRegistered: false,
};
const initialState = getItem('user') || initialObject;
export default function USER(state = initialState, action) {
    switch (action.type) {
        case types.REGISTER:
            return {
                ...state,
                isRegistered: true
            };
        case types.LOGOUT:
            return {
                ...state,
                loginFlag: false
            };
        case types.LOGIN:
            return {
                ...state,
                loginFlag: true,
                userId: action.userId
            };
        default:
            return state;
    }
}