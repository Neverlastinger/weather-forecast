import React from 'react';
import { connect } from 'react-redux';

let Message = ({ city }) => (
	<div className="message">
		Showing a forecast for <strong>{city || '...'}</strong>
	</div>
);


export default connect(
	(state) => ({
		city: state.forecast.city
	}),
	null
)(Message);
