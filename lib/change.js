//редактируем запись в базе
const db = require('./db');
const fs = require('fs');

module.exports = function(req, res, callback) {
    db.getConnection(function(err, connection) {
        if (req.body && req.file && req.file.filename){
            req.body.preview = req.file.filename;
        };
        //логика редактирования
        if (req.body && req.body.title && req.body.about){
            let id = req.body.id;
            let body = req.body;
            delete body.id;
            delete body.edit;
            let promise = new Promise((resolve, reject) => {
                connection.query(`SELECT preview FROM films WHERE ?`, {id: id}, function (err, info) {
                    if (err) throw err;
                    resolve(info);
                });
            });
            //меняем изображение в записи в случае подгрузки нового (старое сносим)
            promise.then(result => {
                if(result && result[0] && result[0]['preview'] && req.body.preview){
                    fs.unlink(`public/images/${result[0]['preview']}`, function(err){
                        if (err) throw err;
                    });
                }
            });
            //обновляем запись
            promise.then(result => {
                connection.query(`UPDATE films SET ? WHERE id = ?`, [body, id], callback, function (err, info) {});
            });
            promise.then(result => {
                 connection.release();
            });
        } else {
			connection.release();
		};

    });
};