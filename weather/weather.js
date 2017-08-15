/*jshint esversion: 6 */

const request = require('request');

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/7f4331d56f923fbe87e6a42881df2ef2/${lat},${lng}`,
    json: true,
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect Forecast.io Servers');
    } else if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature,
      });
    } else {
      callback('Unable to process your request');
    }
  });

};

module.exports.getWeather = getWeather;
