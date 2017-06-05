//редактируем запись в базе
const db = require('./db');

module.exports = function(req, res, callback) {
    db.getConnection(function(err, connection) {

        if(req.file && req.file.filename){
            req.body.preview = req.file.filename;
        };
        if(req.body && req.body.title && req.body.about){
            let id = req.body.id;
            let body = req.body;
            delete body.id;
            delete body.edit;
            connection.query(`UPDATE films SET ? WHERE id = ?`, [body, id], callback, function (err, info) {
                connection.release();
            });
        }else{
			connection.release();
		};

    });
};