import React, { Component } from 'react';

import CityInput from './CityInput';
import Forecast from './Forecast';
import Message from '../containers/Message';

export default class App extends Component {

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
