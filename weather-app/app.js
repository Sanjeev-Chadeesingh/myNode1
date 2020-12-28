const request = require('postman-request');
const geocode = require('./utils/geocode');

// const weatherURL = 'http://api.weatherstack.com/current?access_key=c0d42c0159b8f4878c0d13dcb95d5bf7&query=37.8267,-122.4233&units=f';

// request({ url: weatherURL, json: true }, (error, response) => {
//     if(error) {
//         console.log('Unable to connect to weather service.');
//     } else if(response.body.error) {
//         console.log('Unable to find location.');
//     } else {
//         console.log(`${response.body.current.weather_descriptions[0]}, and it's currently ${response.body.current.temperature} degrees, but it feels like ${response.body.current.feelslike} degrees.`);
//     }
// });

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })

// geocode('Orlando', (error, data) => {
//     console.log('Error', error);
//     console.log('Data', data);
// });