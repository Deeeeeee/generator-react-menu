import {fetch} from '../utils/';
import * as types from '../constants/homeTypes';


/**
 * 获取天气
 * @return
 * */
export function fetchWeather(data) {

    return (dispatch) => {
        return fetch('get', '/api/weather_mini', data).then(
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
