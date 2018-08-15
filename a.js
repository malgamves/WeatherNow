var url = 'http://api.openweathermap.org/data/2.5/forecast?id=1253573&APPID=56e2043a628c776ab619d9d393c2b568&units=metric'; // API Request URL

// All logic will go here.
var request = require('request');
request(url, function (err, res, body) {
    var data = JSON.parse(body);
    var city =  data.city['name'];
    var temp = data.list[0].main.temp ;
    var wind = data.list[0].wind.speed ;
    var summary = data.list[0].weather[0].description ;
    


// console.log(city);
module.exports = { place : city, temperature : temp, windSpeed : wind, desc : summary };

});