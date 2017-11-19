var express = require('express')
var path = require('path')
var PORT = process.env.PORT || 5000
var cors = require('cors');
var mongodb = require('mongodb');

var app = express();
// app.use(express.static('public'));
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/views/index.html'));
});

app.get('/index.html', function(request, response) {
	response.sendFile(path.join(__dirname + '/views/index.html'));
});

app.get('/contact-me.html', function(request, response) {
	response.sendFile(path.join(__dirname + '/views/contact-me.html'));
});

app.get('/about-me.html', function(request, response) {
	response.sendFile(path.join(__dirname + '/views/about-me.html'));
});

app.get('/education.html', function(request, response) {
	response.sendFile(path.join(__dirname + '/views/education.html'));
});

app.get('/projects.html', function(request, response) {
	response.sendFile(path.join(__dirname + '/views/projects.html'));
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
