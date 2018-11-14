import React from 'react';
import ReactDOM from 'react-dom';

import exampleApiResponse from './exampleApiResponse';
import forecast from '../js/store/reducers/forecast';
import { setForecast, switchToDay } from '../js/store/actions/actions';

it('sets 5 days forecast when data is retrieved', () => {

	const state = forecast({}, setForecast(exampleApiResponse));
	expect(state.days.length).toEqual(5);

});

it('calculates the correct day-to-day temperature', () => {

	const state = forecast({}, setForecast(exampleApiResponse));

	expect(state.days[0].temperature).toEqual(13);
	expect(state.days[1].temperature).toEqual(7);
	expect(state.days[2].temperature).toEqual(4);
	expect(state.days[3].temperature).toEqual(2);
	expect(state.days[4].temperature).toEqual(2);

});

it('switches correctly to a single day', () => {
	
	const initialState = { _coreData: exampleApiResponse };
	
	const state = forecast(initialState, switchToDay({
		dayOffset: 1,
		dayName: 'Thursday' // exampleApiResponse is made on Wednesday
	}));
	
	expect(state.days.length).toEqual(1);
	
	expect(state.dayDetails[0].time).toEqual("2018-11-15 00:00:00");
	expect(state.dayDetails[0].temperature).toEqual(3.56);
	
	expect(state.dayDetails[1].time).toEqual("2018-11-15 03:00:00");
	expect(state.dayDetails[1].temperature).toEqual(1.02);
	
	expect(state.dayDetails[7].time).toEqual("2018-11-15 21:00:00");
	expect(state.dayDetails[7].temperature).toEqual(-3.94);
});