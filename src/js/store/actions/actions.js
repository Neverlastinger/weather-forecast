// **************************************
// This file contains all action creators
// **************************************

import { SET_FORECAST, SWITCH_TO_DAY, SWITCH_TO_FULL_FORECAST, SET_LOADING, REMOVE_LOADING } from './actionTypes';
import api from '../../network/api';

export const setForecast = (data) => ({ type: SET_FORECAST, data });
export const switchToDay = (day) => ({ type: SWITCH_TO_DAY, day });
export const switchToFullForecast = () => ({ type: SWITCH_TO_FULL_FORECAST });
export const setLoading = () => ({ type: SET_LOADING });
export const removeLoading = () => ({ type: REMOVE_LOADING });

export const fetchForecastByCoords = (data) => (dispatch) => {
	
	dispatch(setLoading());
	
    return api.getForecastByCoords(data).then((response) => {
		dispatch(setForecast(response));
    }).catch((err) => {
		dispatch(removeLoading());
		alert(`Error fetching data by coordinates`);
	})
};

export const fetchForecastByCity = (city) => (dispatch) => {
	
	dispatch(setLoading());
	
    return api.getForecastByCity(city).then((response) => {
		dispatch(setForecast(response));
    }).catch((err) => {
		dispatch(removeLoading());
		alert(`Error fetching data for ${city} city`);
	})
};