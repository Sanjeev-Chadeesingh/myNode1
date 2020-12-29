const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=c0d42c0159b8f4878c0d13dcb95d5bf7&query=37.8267,-122.4233&units=f';

request({ url: url, json: true }, (error, response) => {
    const data = response.body;
    console.log(`${data.current.weather_descriptions}. It is currently ${data.current.temperature} degrees out. If feels like it's ${data.current.feelslike} degrees out.`);
});

const urlTwo = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Orlando.json?access_token=pk.eyJ1IjoiamVldmVzMDIxMCIsImEiOiJja2owYjl1dGsxZjRvMndteXZ0dDA2djhoIn0.eRQ_alaM_Dt3ZFhCLxbbgg&limit=1';

request({ url: urlTwo, json: true }, (error, response) => {
    const data = response.body;
    const longitude = data.features[0].center[0];
    const latitude = data.features[0].center[1];
    console.log(`Longitude: ${longitude}, Latitude: ${latitude}`);
})