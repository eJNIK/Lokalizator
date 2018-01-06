const express = require('express'); //serwer
const hbs = require('hbs');  //handlebars
const morgan = require('morgan'); //logi



const PORT = process.env.PORT || 3000;
let app = express();

app.set('view engine', 'hbs');

app.get('/', function(req,res){
    res.render('index.hbs');
});

app.post('/', function(req,res){
    res.render('index.hbs');
});


app.listen(PORT, () => {
    console.log('App listening on port',PORT,"!","\nHit ctrl+c to terminate");
})