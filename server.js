const express = require('express');
const hbs = require('hbs');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const fs = require('fs');
const apis = require('./apis.js');



var targetDate = new Date();
var timestamp = targetDate.getTime()/1000 + targetDate.getTimezoneOffset() * 60;
var localdate = new Date(timestamp * 1000);





const PORT = process.env.PORT || 3000;
let app = express();
//klucz api's google AIzaSyCzmM0iFRerjj8H8SjK_N0cgLnrPqsMzYQ

var accessLogStream = fs.createWriteStream((__dirname, 'server_logs.log'));
app.use(morgan('combined', {stream: accessLogStream}));

app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req,res){
    res.render('index.hbs',{
        address: 'Grudziądzka 5, Toruń, Poland',
        lat: 53.0171647,
        lng: 18.6030965,
        elevation: 55.95632171630859,
        date: localdate,

    });
});


app.post('/', function(req,res){
    apis(req.body.adress_field).then(result => {
    res.render('index.hbs', {
        address: result[0],
        lat: result[1],
        lng: result[2],
        elevation: result[3],
        date: result[4],
    });
    });
});


app.listen(PORT, () => {
    console.log('App listening on port',PORT,"!","\nHit ctrl+c to terminate");
});