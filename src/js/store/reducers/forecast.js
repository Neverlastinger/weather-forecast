// ************************************
// Forecast Reducer
// ************************************

import { SET_FORECAST, SWITCH_TO_DAY } from '../actions/actionTypes';

const daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const forecastDays = 5;
const forecastsPerDay = 8;

const initialState = {
	city: null,
	days: []
}

/**
 * Forecast Reducer. Handles state changes related to the 5 day forecast. 
 * 
 * @param  {Object} state: previous state
 * @param  {Object} action: action to be performed
 * @return {Object} nextState
 */
const forecast = (state = initialState, action) => {
	switch (action.type) {

		case SET_FORECAST:
		
			return {
				...state,
				city: action.data.city.name,
				days: Array.from(Array(forecastDays).keys()).map((dayOffset) => ({
					temperature: getTemperature(dayOffset, action.data),
					dayName: getDay(dayOffset, action.data),
					dayOffset
				})),
				_coreData: action.data
			}
			
		case SWITCH_TO_DAY: 
		
			return {
				...state,
				days: [{
					temperature: getTemperature(action.day.dayOffset, state._coreData),
					dayName: getDay(action.day.dayOffset, state._coreData),
					dayOffset: action.day.dayOffset
				}],
				dayDetails: getDayDetails(action.day.dayName, state._coreData)
			}
			
		default:
			return state;
	}
}

/**
 * Returns temperature for a given day based on the data received from the openweathermap api.
 * 
 * @param  {Number} daysOffset: 0-4: days offset from now
 * @param  {Object} data: openweathermap api data
 * @return {Number} result: temperature in Celsius
 */
const getTemperature = (daysOffset, data) => (
	Math.round(data.list[daysOffset * forecastsPerDay].main.temp)
);

/**
 * Returns the day of the week for the given day and openweathermap api data. 
 * 
 * @param  {Number} daysOffset: 0-4: days offset from now
 * @param  {Object} data: openweathermap api data
 * @return {String} result: day of the week (Monday, Tuesday, etc)
 */
const getDay = (daysOffset, data) => (
	daysOfWeek[new Date(data.list[daysOffset * forecastsPerDay].dt * 1000).getDay()]
);

/**
 * Returns detailed info about a particular day. 
 * 
 * @param  {String} dayName: day of the week (Monday, Tuesday, etc)
 * @param  {[type]} data: existing openweathermap api data
 * @return {[type]} result: detailed info about the given day
 */
const getDayDetails = (dayName, data) => {
	
	const dayData = data.list.filter((item) => (
		daysOfWeek[new Date(item.dt * 1000).getDay()] === dayName
	));
	
	return dayData.map((item) => ({
		time: item.dt_txt,
		temperature: item.main.temp
	}));
}

export default forecast;
