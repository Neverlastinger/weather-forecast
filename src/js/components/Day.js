import React from 'react';

const Day = ({ data }) => (
	<li>
		<div className="header">{data.day}</div>
		<div className="content">{data.temperature}° C</div>
	</li>
);

export default Day;
