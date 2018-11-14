import { connect } from 'react-redux';

import DayListView from '../components/DayList';

/**
 * Redux Container Component for the list of days.
 */
const DayList = connect(
	(state) => ({
		days: state.forecast.days
	}),
	null
)(DayListView);

export default DayList
