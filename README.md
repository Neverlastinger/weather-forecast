## Weather Forecast

A lightweight application written in React and Redux that displays the weather forecast for the next 5 days. 

### Direct Link

https://neverlastinger.github.io/weather-forecast/build/

### Building and Testing the Application

> - Clone the repo
> - install node.js
> - run ```npm install``` to download dependencies
> - run ```npm start``` to load the application on localhost:3000
> - Unit tests can be executed by running ```npm run test```.

You can also run ```npm run build``` to create an optimized build for production. The latest build is uploaded in the ```build/ ```folder in order to make it available [here](https://neverlastinger.github.io/weather-forecast/build/).

### What can be done with more time
- Add better error handling if geolocation access is rejected.
- Implement better UX for the input field: ex. country selection.
- Implement better UX for the back button. 
- Show better forecast for each day. Currently each day shows the expected temperature during the same time of the day. 
- Implement better transitions between screens. 
- Add additional forecast data beyond temperature - clouds, wind, etc.
- Add loading indicators while processing asynchronous requests.
- Implement the browser's back button to navigate between a single day and the list of days.
- Handle the variety of timezone issues that may occur.  