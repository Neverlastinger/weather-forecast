import React from 'react';
import { connect } from 'react-redux';

import Day from './Day';

let DayList = ({ days }) => (
	<ul>
		{days.map((day, i) => (
			<Day data={day} key={i} />
		))}
	</ul>
);

export default connect(
	(state) => ({
		days: state.forecast.days
	}),
	null
)(DayList);
