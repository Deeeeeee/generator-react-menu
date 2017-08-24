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
        return post('/service-core/web/banner/findList', data).then(
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


