const db = require('./lib/db');
const list = require('./lib/list');
const add = require('./lib/add');
const change = require('./lib/change');
const deleting = require('./lib/delete');
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

app.get('/', (req, res) => {
	list((err, films) => {
		res.render('films.twig',{films: films});
	});
});

app.post('/', uploader.single('preview'), (req, res, next) => {
	if(req.query && req.query.ID){
		deleting(req.query.ID, (err, films) => {
			res.redirect('/');
		});
	}else{
		add(req, res, (films) => {
			res.redirect('/');
		});
	}
});

app.listen(3000);
console.log('Express server listening on port 3000');