import { connect } from 'react-redux';

import DayView from '../components/Day';
import { switchToDay } from '../store/actions/actions';

/**
 * Redux Container Component for a single day. 
 */
const Day = connect(
	(state) => ({
		dayDetails: state.forecast.dayDetails
	}),
	(dispatch) => ({
		onDayClick: (day) => dispatch((switchToDay(day)))
	})
)(DayView);

export default Day
