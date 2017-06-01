//добавляем фильм в базу
const db = require('./db');

module.exports = function(req, res, callback) {
    db.getConnection(function(err, connection) {
        if(req.file && req.file.filename){
            req.body.preview = req.file.filename;
        };
        if(req.body && req.body.title && req.body.about){
            connection.query('INSERT INTO films SET ?', req.body, callback, function (err, info) {
                connection.release();
            });
        };
    });
};