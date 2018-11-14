import React from 'react';
import { connect } from 'react-redux';

import Day from './Day';

const DayList = ({ days }) => (
	<ul>
		{days.map((day, i) => (
			<Day data={day} key={i} />
		))}
	</ul>
);

export default DayList;