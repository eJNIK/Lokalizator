const express = require('express'); //serwer
const hbs = require('hbs');  //handlebars
//const morgan = require('morgan'); //logi
const bodyParser = require('body-parser');



//klucz api's google AIzaSyCzmM0iFRerjj8H8SjK_N0cgLnrPqsMzYQ


const PORT = process.env.PORT || 3000;
let app = express();

app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req,res){
    res.render('index.hbs',{
        lat: 53.0171647,
        lng: 18.6030965
    });

});

app.post('/', function(req,res){
    res.render('index.hbs',{
        lat: 54,
        lng: 19
    });

});


app.listen(PORT, () => {
    console.log('App listening on port',PORT,"!","\nHit ctrl+c to terminate");
});