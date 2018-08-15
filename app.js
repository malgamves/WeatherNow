const request = require('request');
const express = require('express');
const path = require('path');
const chalk = require('chalk');
var sourceFile = require('./a');

const app = express();
const port = process.env.PORT || 3000; // Port number


var url = 'http://api.openweathermap.org/data/2.5/forecast?id=1253573&APPID=56e2043a628c776ab619d9d393c2b568&units=metric'; // API Request URL

app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {
      //temp: data.list[0].main.temp,
      city : sourceFile.place  // || data.city['name'],
      //wind: data.list[0].wind.speed,
      //desc: data.list[0].weather[0].description,
    });
  });

app.listen(port, () => {
  console.log(`listening on port ${chalk.green(port)}`);
});

console.log(sourceFile.place);
console.log(sourceFile.desc);
console.log(sourceFile.windSpeed);
console.log(sourceFile.temperature);