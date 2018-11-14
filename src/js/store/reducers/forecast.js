// ************************************
// Forecast Reducer
// ************************************

import { SET_FORECAST } from '../actions/actionTypes';

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
					day: getDay(dayOffset, action.data)
				}))
			}
		default:
			return state;
	}
}

/**
 * Converts Kelvin temperature to Celsius
 * 
 * @param  {Number} kelvin: temperature in Kelvin
 * @return {Number} result: temperature in Celsius
 */
const kelvinToCelsius = (kelvin) => (
	kelvin - 273.15
);

/**
 * Returns temperature for a given day based on the data received from the openweathermap api.
 * 
 * @param  {Number} daysOffset: 0-4: days offset from now
 * @param  {Object} data: openweathermap api data
 * @return {Number} result: temperature in Celsius
 */
const getTemperature = (daysOffset, data) => (
	Math.round(kelvinToCelsius(data.list[daysOffset * forecastsPerDay].main.temp))
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

export default forecast;
