//удаляем фильм и его постер из базы
const db = require('./db');
const fs = require('fs');

module.exports = function(id, callback) {
    db.getConnection(function(err, connection) {
        let promise = new Promise((resolve, reject) => {
            connection.query(`SELECT preview FROM films WHERE ?`, {id: id}, function (err, info) {
                 if (err) throw err;
                 resolve(info);
            });
        });
        promise.then(result => {
            if(result && result[0] && result[0]['preview']){
                fs.unlink(`public/images/${result[0]['preview']}`, function(err){
                    if (err) throw err;
                });
            }
        });
        promise.then(result => {
            connection.query('DELETE FROM films WHERE ?', {id: id},  callback, function (err) {
                if (err) throw err;
            });
        });     
        promise.then(result => {
            connection.release();
        }); 
        promise.catch(err => {
            console.log(`Пизданулось :( ${err}`);
        });        
    });
}; 