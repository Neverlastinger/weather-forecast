import { connect } from 'react-redux';

import BackButtonView from '../components/BackButton';
import { switchToFullForecast } from '../store/actions/actions';

/**
 * Redux Container Component for the back button. 
 */
const BackButton = connect(
	null,
	(dispatch) => ({
		onClick: () => dispatch(switchToFullForecast())
	})
)(BackButtonView);

export default BackButton
