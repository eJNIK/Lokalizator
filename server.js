const express = require('express');
const hbs = require('hbs');
//const morgan = require('morgan');
const bodyParser = require('body-parser');
const api1 = require('./api1.js');




//klucz api's google AIzaSyCzmM0iFRerjj8H8SjK_N0cgLnrPqsMzYQ


const PORT = process.env.PORT || 3000;
let app = express();


app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req,res){
    res.render('index.hbs',{
        lat: 53.0171647,
        lng: 18.6030965,
    });
});


app.post('/', function(req,res){
    api1(req.body.adress_field).then(result => {
    res.render('index.hbs', {
        lat: result[0],
        lng: result[1],
    });
    });
});


app.listen(PORT, () => {
    console.log('App listening on port',PORT,"!","\nHit ctrl+c to terminate");
});