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
 * 获取天气
 * @return
 * */
export function fetchWeather(city) {
    let data={
        city: city
    };
    return (dispatch) => {
        return get('/api/weather_mini', data).then(
            response => dispatch({
                type: types.FETCH_WEATHER,
                weather: response.data
            }),
            error => dispatch({
                type: types.FETCH_WEATHER_FAILED,
                error
            })
        )
    }
}
