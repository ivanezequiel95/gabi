//const db = require('../app.js').db;

let apiPersonas = {};

apiPersonas.getAllPersonas = (db) => {
   return new Promise((resolve, reject) => {
    /*fs.readFile('data/personal.json', 'UTF8' ,(err, data) => {
     if(err) {
        reject(err);
     }
       resolve(data);
     });*/
     db.collection('personas').find().toArray(function(err, result) {
        if (err) {
          reject(err)
        }
        resolve(result)
      });
    });
}

module.exports = apiPersonas;