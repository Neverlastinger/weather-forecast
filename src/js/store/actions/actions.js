// **************************************
// This file contains all action creators
// **************************************

import { SET_FORECAST, SWITCH_TO_DAY, SWITCH_TO_FULL_FORECAST } from './actionTypes';
import api from '../../network/api';

export const setForecast = (data) => ({ type: SET_FORECAST, data });
export const switchToDay = (day) => ({ type: SWITCH_TO_DAY, day });
export const switchToFullForecast = () => ({ type: SWITCH_TO_FULL_FORECAST });

export const fetchForecastByCoords = (data) => (dispatch) => {
    return api.getForecastByCoords(data).then((response) => {
		console.error(response);
		dispatch(setForecast(response));
    });
};
