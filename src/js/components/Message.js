import React from 'react';

/**
 * Represents the message displayed above the forecast.
 *
 * @param {Object} props:
 * 						- city: city name
 */
const Message = ({ city }) => (
	<div className="message">
		Showing a forecast for <strong>{city || '...'}</strong>
	</div>
);

export default Message;