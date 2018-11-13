// *************************
// Network functionality. Uses Fetch API.
// *************************

const _url = 'http://api.openweathermap.org/data/2.5/';
const appId = '7d55c4d6a93e6feeca80fb7e60445421';

const api = {
    getForecastByCoords: (params) => {

		var url = new URL(`${_url}forecast`)
		var params = { lat: 42.6977, lon: 23.3219, appid: appId };
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
