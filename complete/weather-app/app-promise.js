const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var encodeAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}&key=AIzaSyA0nrRo9Z_XVdpddvV-YSJRmIwzmfbHhVU`;

axios.get(geocodeUrl).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find that address.');
    }

    var lat = response.data.results[0].geometry.location.lat
    var lng = response.data.results[0].geometry.location.lng
    var weatherUrl = `https://api.darksky.net/forecast/1e11f676b741a52d7caf09b419bb1be1/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
}).then((response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It's currently  ${temperature}. It feels like ${apparentTemperature}`);
}).catch((e) => {
    if (e.code === 'ECONNREFUSED') {
        console.log('Unable to connect to API servers.');
    } else {
        console.log(e.message);
    }
});