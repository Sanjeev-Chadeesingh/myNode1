const request = require('postman-request');
const chalk = require('chalk');
const geocode = require('./utils/geocode');

const url = 'http://api.weatherstack.com/current?access_key=c0d42c0159b8f4878c0d13dcb95d5bf7&query=37.8267,-122.4233&units=f';

// request({ url: url, json: true }, (error, response) => {
//     if(error) {
//         console.log(chalk.red('Unable to connect to weather services.'));
//     } else if(response.body.error) {
//         console.log(chalk.red('Unable to find location.'));
//     } else {
//         console.log(`It's ${response.body.current.weather_descriptions}, and ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees. There is a ${response.body.current.precip}% chance of rain.`);
//     }
// });





geocode('Boston', (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
});



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