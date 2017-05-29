const films = require('./lib/films');
const uploader = require('./lib/uploader');
const twig = require('twig');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.set("twig options", {strict_variables: false});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// var request = require('request');
// var urlutils = require('url');

app.get('/', (req, res) => {
    if(req.query && req.query.ID){
		films.delete(req.query.ID, (err, films) => {
             res.render('films.twig',{films: films});
		});
	}else{
        films.list((err, films) => {
			res.render('films.twig',{films: films});
		});
	}
});

app.post('/', uploader.single('preview'), (req, res, next) => {
  	films.add(req, res, (films) => {
		res.redirect('/');
	});
});

app.listen(3000);
console.log('Express server listening on port 3000');