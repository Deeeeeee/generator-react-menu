import {post, get} from '../utils/';
import * as types from '../constants/userTypes';


/**
 * 获取用户信息
 * @param {number} userId 用户id
 * */
export function fetchUserInfo(userId) {
    let data = {
        userId: userId
    };
    return (dispatch) => {
        return get('/service-core/web/banner/findList', data).then(
            response => dispatch({
                type: types.FETCH_USER_INFO,
                bannerList: response.data
            }),
            error => dispatch({
                type: types.FETCH_USER_INFO_FAILED,
                error
            })
        )
    }
}

/**
 * 用户注册
 * @param {string} phone  用户手机号码
 * @param {string} checkCode  验证码
 * @param {string} password    密码
 * */
export function register(phone, password, checkCode) {
    let data = {
        phone: phone,
        password: password,
        checkCode: checkCode
    };
    return dispatch => {
        return post('/service-core/web/banner/findList',data).then(
            response => dispatch({
                type: types.REGISTER
            }),
            error => dispatch({
                type: types.REGISTER_FAILED,
                error
            })
        )
    }
}

/**
 * 用户登录
 * @param {string} phone  用户手机号码
 * @param {string} password  用户密码
 * @param {string} token    Token
 * */
export function login(phone, password, token) {
    let data = {
        phone: phone,
        password: password,
        token: token
    };
    return dispatch => {
        return post('/service-core/web/banner/findList',data).then(
            ssn => {
                return afterLogin(ssn).then(() => {
                    return ssn.getUserid().then(userId => dispatch({ type: types.LOGIN, userId}));
                });
            },
            error => dispatch({
                type: types.LOGIN_FAILED,
                error
            })
        );
    }
}

/**
 * 用户登出
 * @return
 * */
export function logout() {
    return (dispatch) => {
        return dispatch({ type: types.LOGOUT})
    }
}