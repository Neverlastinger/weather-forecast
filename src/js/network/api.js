// **************************************
// Network functionality. Uses Fetch API.
// **************************************

const _url = 'https://api.openweathermap.org/data/2.5/';
const appId = '7d55c4d6a93e6feeca80fb7e60445421';

/**
 * An object containing all Network methods. 
 */
const api = {
    getForecastByCoords: (params) => {
		var url = new URL(`${_url}forecast`);
		var params = { lat: params.lat, lon: params.lon, appid: appId, units: 'metric' };
		url.search = new URLSearchParams(params)

		return fetch(url).then(function (response) {
			if(response.ok) {
				return response.json().then((response) => response);
			} else {
				throw new Error('Network Error');
			}
		});
	}
};

export default api;
