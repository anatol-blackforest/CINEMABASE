//считываем фильмы с базы
const db = require('./db');
//промисы придумали трусы
module.exports = function(callback) {
    db.getConnection(function(err, connection) {
        connection.query('SELECT * FROM films', callback, function (err, info) {
            connection.release();
        });
    });
};