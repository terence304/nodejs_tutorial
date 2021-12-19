const request = require('request');

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/1e11f676b741a52d7caf09b419bb1be1/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect Forcast.io server.');
        } else if (response.statusCode === 400) {
            callback('Unable to fetch weather.');
        } else if (response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
    });
}

module.exports.getWeather = getWeather;