import { connect } from 'react-redux';

import AppView from '../components/App';
import { fetchForecastByCoords } from '../store/actions/actions';

const App = connect(
	null,
	(dispatch) => ({
		onGeolocationRetrieved: (data) => dispatch(fetchForecastByCoords(data))
	})
)(AppView);

export default App;