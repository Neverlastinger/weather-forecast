import React from 'react';

import DayDetails from './DayDetails';

/**
 * Represents a single day view. 
 * 
 * @param {Object} props:
 * 						- data: day data, containing the name of the day and temperature
 * 						- dayDetails: detailed info about the currently selected day
 * 						- onDayClick: callback, executed when a day is clicked
 */
const Day = ({ data, dayDetails, onDayClick }) => (
	
	<li onClick={onDayClick.bind(this, data)}>
		<div className="header">{data.dayName}</div>
		{dayDetails ? 
			<DayDetails details={dayDetails} /> :
			<div className="content">{data.temperature}° C</div>
		}
	</li>
);

export default Day;
