import React, { Component } from 'react';

import CityInput from './CityInput';
import DayList from './DayList';

class App extends Component {
	render() {
		return (
			<div className="container">
				<CityInput />
				<DayList />
			</div>
		);
	}
}

export default App;
