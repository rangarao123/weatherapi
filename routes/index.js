var express = require('express');
var router = express.Router();
var connect = require('connect');
var http = require('http');

//var app = connect('api.openweathermap.org/data/2.5/weather?q=London');
//var url=require('url');
//url.connect(' api.openweathermap.org/data/2.5/weather?q=London');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'weather report' });
});
router.post('/weather',function(req,res){

  var request = require('request');

  var apiKey = '1a3e119332415d4efcd36b8bacc8a159';
  var cityname=req.body.cityname;
  var url = 'http://api.openweathermap.org/data/2.5/weather?q='+cityname+'&APPID=7e26d07a3d38ed74d6efffe378c7256c';
console.log(url)
  request(url, function (err, response, body) {
    if(err){
     console.log('error:', error);
   } else {
     var weather = JSON.parse(body);
     console.log(weather);

     var  message = `It's ${weather.main.temp} degrees in ${weather.name}!`;

console.log(message);
    //  let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
      res.render('sucess',{weather:message});

    }
  });





//  cityname:req.body.cityname;


});
module.exports = router;
