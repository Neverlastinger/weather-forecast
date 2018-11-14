import { connect } from 'react-redux';

import DayListView from '../components/DayList';

const DayList = connect(
	(state) => ({
		days: state.forecast.days
	}),
	null
)(DayListView);

export default DayList
