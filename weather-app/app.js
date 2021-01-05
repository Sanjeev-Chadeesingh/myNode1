const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=c0d42c0159b8f4878c0d13dcb95d5bf7&query=37.8267,-122.4233&units=f';

request({ url: url, json: true }, (error, response) => {
    console.log(`It's ${response.body.current.weather_descriptions}, and ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees. There is a ${response.body.current.precip}% chance of rain.`);
});

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiamVldmVzMDIxMCIsImEiOiJja2prN3BxNnYwNW52MnpwNG0xZDV5eDY4In0.PpIN8wuXpHPe_KV9qzgcHg&limit=1';

request({ url: geocodeURL, json: true }, (error, response) => {
    const longitude = response.body.features[0].center[0];
    const latitude = response.body.features[0].center[1];
    const location = response.body.features[0].text;
    console.log(`Location: ${location}. Latitude: ${latitude}. Longitude: ${longitude}.`);
});