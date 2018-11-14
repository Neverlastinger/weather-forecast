// **************************************
// This file contains all action creators
// **************************************

import { SET_FORECAST, SWITCH_TO_DAY } from './actionTypes';
import api from '../../network/api';

export const setForecast = (data) => ({ type: SET_FORECAST, data });
export const switchToDay = (day) => ({ type: SWITCH_TO_DAY, day });

export const fetchForecastByCoords = (data) => (dispatch) => {
    return api.getForecastByCoords(data).then((response) => {
		console.error(response);
		dispatch(setForecast(response));
    });
};
