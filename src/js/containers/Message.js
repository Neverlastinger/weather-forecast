import { connect } from 'react-redux';

import MessageView from '../components/Message';

const Message = connect(
	(state) => ({
		city: state.forecast.city
	}),
	null
)(MessageView);

export default Message;