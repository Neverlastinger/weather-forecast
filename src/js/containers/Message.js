import { connect } from 'react-redux';

import MessageView from '../components/Message';

/**
 * Redux Container Component for the message displayed above the forecast. 
 */
const Message = connect(
	(state) => ({
		city: state.forecast.city
	}),
	null
)(MessageView);

export default Message;