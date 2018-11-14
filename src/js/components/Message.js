import React from 'react';

const Message = ({ city }) => (
	<div className="message">
		Showing a forecast for <strong>{city || '...'}</strong>
	</div>
);

export default Message;