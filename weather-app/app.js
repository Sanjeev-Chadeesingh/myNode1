const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=c0d42c0159b8f4878c0d13dcb95d5bf7&query=37.8267,-122.4233';

request({ url: url, json: true }, (error, response) => {
    const data = response.body;
    console.log(data.current);
});