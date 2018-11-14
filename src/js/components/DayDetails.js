import React from 'react';

/**
 * Represents the detailed information about each day. 
 * Contains forecast data for every 3 hours. 
 * 
 * @param {Array} details: detailed info about the currently selected day
 */
const DayDetails = ({ details }) => (
	
	<ul className="details">
		{details.map((timeslot) => (
			<li key={timeslot.time}>
				<span>{timeslot.time}</span>
				<span>{timeslot.temperature}° C</span>
			</li>
		))}
	</ul>
);

export default DayDetails;
