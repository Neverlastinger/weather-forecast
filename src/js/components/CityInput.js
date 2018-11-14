import React from 'react';

/**
 * Represents the city search input. 
 * 
 * @param {Object} props:
 * 					- onCityEntered: callback, executed when the user hits the Enter key
 */
const CityInput = ({ onCityEntered }) => (
	<div className="input">
		<input type="text" placeholder="Enter a city and hit Enter" onKeyPress={handleKeyPress.bind(null, onCityEntered)} />
	</div>
);

const handleKeyPress = (onCityEntered, e) => {
	e.key === 'Enter' && onCityEntered(e.target.value);
}

export default CityInput;
