import React, { Component } from 'react';
import { connect } from 'react-redux';

import CityInput from './CityInput';
import Forecast from './Forecast';
import Message from './Message';
import { fetchForecastByCoords } from '../store/actions/actions';

class App extends Component {

	componentDidMount() {
		navigator.geolocation.getCurrentPosition((position) => {
			this.props.onGeolocationRetrieved({
				lat: position.coords.latitude,
				lon: position.coords.long
			});
		},
		() => {
			alert('no position available');
		});
	}

	render() {
		return (
			<div className="container">
				<CityInput />
				<Message />
				<Forecast />
			</div>
		);
	}
}


export default connect(
	null,
	(dispatch) => ({
		onGeolocationRetrieved: (data) => dispatch(fetchForecastByCoords(data))
	})
)(App);
