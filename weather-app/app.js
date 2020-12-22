const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=c0d42c0159b8f4878c0d13dcb95d5bf7&query=37.8267,-122.4233&units=f';

request({ url, json: true }, (error, response) => {
    // console.log(response.body.current);
    console.log(`${response.body.current.weather_descriptions[0]}, and it's currently ${response.body.current.temperature} degrees, but it feels like ${response.body.current.feelslike} degrees.`);
});