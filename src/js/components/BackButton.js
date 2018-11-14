import React from 'react';

/**
 * Represents the back button. Returns the user to the full 5 day forecast. 
 * 
 * @param {Object} props:
 * 						- onClick: callback, executed when the component is clicked.
 */
const BackButton = ({ onClick }) => (
	<div className="back-button" onClick={onClick}>Go Back to the full 5 day forecast</div>
);

export default BackButton;
