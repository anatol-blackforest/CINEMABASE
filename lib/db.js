//Настройки базы данных
const mysql = require('mysql');

module.exports = mysql.createPool({
	connectionLimit : 100,
	host     	: 'localhost',
	database	: 'cinemabase', 
	user     	: 'root',
	password : ''
});