const request = require('postman-request');

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiamVldmVzMDIxMCIsImEiOiJja2prN3BxNnYwNW52MnpwNG0xZDV5eDY4In0.PpIN8wuXpHPe_KV9qzgcHg&limit=1`;

    request({ url, json: true }, (error, response) => {
        if(error) {
            callback('Unable to connect to location services', undefined);
        } else if(response.body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined);
        } else {
            callback(undefined, {
                longitude: response.body.features[0].center[0],
                latitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            });
        }
    });
};

module.exports = geocode;