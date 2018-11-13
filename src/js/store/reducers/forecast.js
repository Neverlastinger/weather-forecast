import { SET_FORECAST } from '../actions/actionTypes';

const daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const forecastDays = 5;
const forecastsPerDay = 8;

const initialState = {
	city: null,
	days: []
}

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


const kelvinToCelsius = (kelvin) => (
	kelvin - 273.15
);

const getTemperature = (daysOffset, data) => (
	Math.round(kelvinToCelsius(data.list[daysOffset * forecastsPerDay].main.temp))
);

const getDay = (daysOffset, data) => (
	daysOfWeek[new Date(data.list[daysOffset * forecastsPerDay].dt * 1000).getDay()]
);

export default forecast;
