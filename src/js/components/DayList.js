import React from 'react';
import { connect } from 'react-redux';

import Day from '../containers/Day';

/**
 * Represents the list of days displayed on the main page. 
 * 
 * @param {Object} props:
 * 						- days: info about all the days
 */
const DayList = ({ days }) => (
	<ul>
		{days.map((day, i) => (
			<Day data={day} key={i} />
		))}
	</ul>
);

export default DayList;