const express = require('express');
const hbs = require('hbs');
//const morgan = require('morgan');
const bodyParser = require('body-parser');
const apis = require('./apis.js');




//klucz api's google AIzaSyCzmM0iFRerjj8H8SjK_N0cgLnrPqsMzYQ


const PORT = process.env.PORT || 3000;
let app = express();


app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req,res){
    res.render('index.hbs',{
        address: 'Grudziądzka 5, Toruń, Poland',
        lat: 53.0171647,
        lng: 18.6030965,
        elevation: 55.95632171630859,

    });
});


app.post('/', function(req,res){
    apis(req.body.adress_field).then(result => {
    res.render('index.hbs', {
        address: result[0],
        lat: result[1],
        lng: result[2],
        elevation: result[3],
    });
    });
});


app.listen(PORT, () => {
    console.log('App listening on port',PORT,"!","\nHit ctrl+c to terminate");
});