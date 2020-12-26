const request = require('postman-request');

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

// const geocoderURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiamVldmVzMDIxMCIsImEiOiJja2owYjl1dGsxZjRvMndteXZ0dDA2djhoIn0.eRQ_alaM_Dt3ZFhCLxbbgg&limit=1';

// request({ url: geocoderURL, json: true }, (error, response) => {
//     if(error) {
//         console.log('Unable to connect to geocoder service.');
//     } else if(response.body.features.length === 0) {
//         console.log('Nothing seems to match your search. Check spelling / location and try again please.');
//     } else {
//         const lat = response.body.features[0].center[0];
//         const lon = response.body.features[0].center[1];
//         console.log(`Latitude: ${lat} + Longitude: ${lon}`);
//     }
// });

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiamVldmVzMDIxMCIsImEiOiJja2owYjl1dGsxZjRvMndteXZ0dDA2djhoIn0.eRQ_alaM_Dt3ZFhCLxbbgg&limit=1'
    request({ url, json: true }, (error, response) => {
        if(error) {
            console.log()
        }
    })
};

geocode('Orlando', (error, data) => {

})