var http = require('http'); // To start the server

var url = 'http://api.openweathermap.org/data/2.5/forecast?id=1253573&APPID=56e2043a628c776ab619d9d393c2b568&units=metric'; // API Request URL

var port = 8081; // Port number

// Creating server
var server = http.createServer(function (request, response) {
  // All logic will go here.
  var request = require('request');
  request(url, function (err, res, body) {
    var data = JSON.parse(body);
    response.write("<html><body><div id ='container'>");
    response.write("<h1>" + 'City Name : ' + data.city['name'] + '<br>' + "</h1>");
    response.write("<h2>" + 'Temperature (Celsius): ' + data.list[0].main.temp + '<br>' + "</h2>");
    response.write("<h2>" + 'Wind Speed (Km/h) : ' + data.list[0].wind.speed + '<br>' + "</h2>");
    response.write("<h2>" + 'Summary : ' + data.list[0].weather[0].description + '<br>' + "</h2>");
    response.write("</div></body></html>");
    response.end();
  });




}).listen(port);

console.log('running server on port ' + port);