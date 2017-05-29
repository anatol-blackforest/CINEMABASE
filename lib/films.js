var mysql = require('mysql');

var connection = mysql.createConnection({
	host     	: 'localhost',
	database	: 'cinemabase', 
	user     	: 'root',
	password : ''
});

connection.connect();

module.exports = {
	list: function(callback) {
		connection.query('SELECT * FROM films', callback);
	},

	add: function(req, res, callback) {
        if(req.file && req.file.filename){
           req.body.preview = req.file.filename;
		};
		if(req.body && req.body.title && req.body.about){
			connection.query(
				'INSERT INTO films SET ?', 
				req.body, 
				callback
			);
		}else{
			connection.query('SELECT * FROM films', callback);
		}
	},

	change: function(id, text, callback) {
		// TODO
	},

	delete: function(id, callback) {
		connection.query('DELETE FROM films WHERE ?', {id: id}, callback);
	}
};