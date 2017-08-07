const request = require('request');

var geoCodeAddress = (address,callback ) => {
  var encoded = encodeURIComponent(address);

  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encoded}`,
    json: true
  }, (error,response,body) => {
    if(error){
      callback('Unable to connect Google servers.');
    }else if(body.status==='ZERO_RESULTS'){
      callback('Unable to locate that address');
    }else if(body.status==='OK'){
      callback(undefined,{
        address: body.results[0].formatted_address,
        lat: body.results[0].geometry.location.lat,
        lon: body.results[0].geometry.location.lng
      })
    
    }
  });
};

module.exports.geoCodeAddress = geoCodeAddress;
