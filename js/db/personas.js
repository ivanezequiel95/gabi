const fs = require('fs');

let apiPersonas = {};

apiPersonas.getAllPersonas = () => {
   return new Promise((resolve, reject) => {
    fs.readFile('data/personal.json', 'UTF8' ,(err, data) => {
     if(err) {
        reject(err);
     }
       resolve(data);
     });
    });
}

module.exports = apiPersonas;