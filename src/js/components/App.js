import React, { Component } from 'react';

import BackButton from '../containers/BackButton';
import CityInput from '../containers/CityInput';
import DayList from '../containers/DayList';
import Message from '../containers/Message';

/**
 * Main components for the Forecast Weather App. 
 * Requests geolocation on init and renders the rest of the components. 
 */
export default class App extends Component {

	componentDidMount() {
		
		navigator.geolocation.getCurrentPosition(
			(position) => {
				this.props.onGeolocationRetrieved({
					lat: position.coords.latitude,
					lon: position.coords.longitude
				});
			},
			(err) => {
				alert('no position available');
				console.error(err);
			}
		);
	}

	render = () => (
		<div className="container">
			{this.props.isSingleDay ?
				<BackButton /> :
				<CityInput />
			}
			<Message />
			<DayList />
		</div>
	);
}
