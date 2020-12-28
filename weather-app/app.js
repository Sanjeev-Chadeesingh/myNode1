const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=c0d42c0159b8f4878c0d13dcb95d5bf7&query=37.8267,-122.4233&units=f';

request({ url: url, json: true }, (error, response) => {
    const data = response.body;
    console.log(`${data.current.weather_descriptions}. It is currently ${data.current.temperature} degrees out. If feels like it's ${data.current.feelslike} degrees out.`);
});