import { REQUEST_FORECAST_BY_COORDS, SET_FORECAST } from './actionTypes';
import api from '../../network/api';

export const requestForecastByCoords = (data) => ({ type: REQUEST_FORECAST_BY_COORDS, data });
export const setForecast = (data) => ({ type: SET_FORECAST, data });

export const fetchForecastByCoords = (data) => (dispatch) => {

    dispatch(requestForecastByCoords(data));

    return api.getForecastByCoords().then((response) => {
		console.error(response);
		dispatch(setForecast(response));
    });
};
