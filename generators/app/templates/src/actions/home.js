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


