const axios = require('axios');

var api1 = async (address)=> {

        var parse_adres = encodeURIComponent(address);
        var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + parse_adres + '&key=AIzaSyALmeubrVtBJALrKPYiAp7uH63lsKilnVY';

        var addr;
        var lat;
        var lng;



        await axios.get(url)
            .then(function(response){
                addr = response.data.results[0].formatted_address;
                lat = response.data.results[0].geometry.location.lat;
                lng = response.data.results[0].geometry.location.lng;
            });



     return [lat,lng];


}




module.exports = api1;