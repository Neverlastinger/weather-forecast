import { connect } from 'react-redux';

import CityInputView from '../components/CityInput';
import { fetchForecastByCity } from '../store/actions/actions';

/**
 * Redux Container Component for the city input field.
 */
const CityInput = connect(
	null,
	(dispatch) => ({
		onCityEntered: (value) => dispatch(fetchForecastByCity(value))
	})
)(CityInputView);

export default CityInput
