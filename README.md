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

### About the Source Code

The application is built with ```create-react-app```, uses ```redux``` and ```redux-thunk``` to encapsulate state management and to separate it from the view layer. The container components are separated in external files from the related visual components to simplify a future transition of this web application to a React Native mobile application. SASS is used to simplify CSS code. 

### What can be done with more time
- Implement better UX for error handling. 
- Implement better UX for the input field.
- Implement better UX for the back button. 
- Implement better UX for loading indicators. 
- Implement better algorithm for showing forecast. Currently each day shows the expected temperature during the same time of the day. 
- Implement better transitions between screens. 
- Add additional forecast data beyond temperature - clouds, wind, etc.
- Implement the browser's back button to navigate between a single day and the list of days.
- Handle the variety of timezone issues that may occur. 