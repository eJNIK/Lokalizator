const axios = require('axios');

var apis = async (address)=> {

        var parse_adres = encodeURIComponent(address);
        var url_address = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + parse_adres + '&key=AIzaSyCzmM0iFRerjj8H8SjK_N0cgLnrPqsMzYQ';
        var addr;
        var lat;
        var lng;
        var elevation;

        await axios.get(url_address)
            .then(function(response){
                addr = response.data.results[0].formatted_address;
                lat = response.data.results[0].geometry.location.lat;
                lng = response.data.results[0].geometry.location.lng;
            });

        var latLng = lat + "," + lng;
        var url_elevation = 'https://maps.googleapis.com/maps/api/elevation/json?locations=' + latLng + '&key=AIzaSyCzmM0iFRerjj8H8SjK_N0cgLnrPqsMzYQ';

        await axios.get(url_elevation)
            .then(function(response){
                elevation = response.data.results[0].elevation;
            });

        var url_time = 'https://maps.googleapis.com/maps/api/timezone/json?location=' + latLng + '&timestamp=' + new Date().getTime()/1000+ '&key=AIzaSyAAZIuySGWS38tag_20spBjEIEoA9MMgHw'
        var dstOff;
        var rawOff;

        await axios.get(url_time)
            .then(function(response){
                dstOff = response.data.dstOffset;
                rawOff = response.data.rawOffset;
        });

        var targetDate = new Date();
        var offset = (dstOff*1000) + (rawOff*1000);
        var timestamp = targetDate.getTime()/1000 + targetDate.getTimezoneOffset() * 60;
        var localdate = new Date(timestamp * 1000 + offset);

    return [addr,lat,lng,elevation,localdate];


}

module.exports = apis;