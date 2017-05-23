import {post, get} from '../utils/';
import * as types from '../constants/homeTypes';


/**
 * 获取Banner列表
 * @return
 * */
export function getBannerList(data) {
    return (dispatch) => {
        return get('/service-core/web/banner/findList', data).then(
            response => dispatch({
                type: types.FETCH_BANNER_LIST,
                bannerList: response.data
            }),
            error => dispatch({
                type: types.FETCH_BANNER_LIST_FAILED,
                error
            })
        )
    }
}


/**
 * 获取精选案例列表
 * @return
 * */
export function getCaseList(data) {
    return (dispatch) => {
        return get('/service-core/web/selectedCase/findSelectedCase', data).then(
            response => dispatch({
                type: types.FETCH_CASE_LIST,
                caseList: response.data
            }),
            error => dispatch({
                type: types.FETCH_CASE_LIST_FAILED,
                error
            })
        )
    }
}

/**
 * 获取首页精选案例
 * @return
 * */
export function getHomeCaseList() {
    return (dispatch) => {
        return get('/service-core/web/selectedCase/findHomeSelectedCase').then(
            response => dispatch({
                type: types.FETCH_HOME_CASE_LIST,
                homeCaseList: response.data
            }),
            error => dispatch({
                type: types.FETCH_HOME_CASE_LIST_FAILED,
                error
            })
        )
    }
}
/**
 * 获取案例详情
 * @return
 * */
export function getCaseDetail(data) {
    return (dispatch) => {
        return get('/service-core/web/selectedCase/loadSelectedCase', data).then(
            response => dispatch({
                type: types.FETCH_CASE_DETAIL,
                currentCase: response.data

            }),
            error => dispatch({
                type: types.FETCH_CASE_DETAIL_FAILED,
                error
            })
        )
    }
}
