// **************************************
// Network functionality. Uses Fetch API.
// **************************************

const baseUrl = 'https://api.openweathermap.org/data/2.5/';
const appId = '7d55c4d6a93e6feeca80fb7e60445421';

/**
 * Sends a fetch request. 
 * 
 * @param  {String} action: url plug
 * @param  {[type]} data: GET params
 */
const request = ({ action, data }) => {
	
	var url = new URL(`${baseUrl}${action}`);
	var params = {
		...data,
		appid: appId, 
		units: 'metric' 
	};
	url.search = new URLSearchParams(params)

	return fetch(url).then((response) => {
		if(response.ok) {
			return response.json().then((response) => response);
		} else {
			throw new Error('Network Error');
		}
	}).catch((err) => {
		throw new Error('Network Error');
	});
}

/**
 * An object containing all Network methods. 
 */
const api = {
    getForecastByCoords: (params) => ( 
		request({ 
			action: 'forecast', 
			data: { 
				lat: params.lat, 
				lon: params.lon 
			} 
		})
	),
	
	getForecastByCity: (city) => (
		request({ 
			action: 'forecast', 
			data: { 
				q: city
			} 
		})
	)
};

export default api;
