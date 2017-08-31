const promesas = require('./modulos/promises.js');
const callbacks = require('./modulos/callbacks.js');
const fs = require('fs');
const http = require('http');

/*let resultado;
promesas.p1.then((data) => {
    resultado = data;
    console.log(resultado);
})
.catch((err) => {
    console.log(err);
});


let myCallback = (err, res) => {
    if(err)
        console.log(err);
    else
        console.log(res);
}

callbacks.c1(123, myCallback);*/

/*fs.watch('test.js', (event, filename) => {
    console.log(event, filename);
});*/

/*fs.readFile('test.js', (err, data) => {
    if(err) {
        console.log("ERROR: ",err);
        return;
    }
    console.log("Archivo", data);
});*/

/*fs.appendFile('testd.js', "funca puto", (err) => { //se puede usar el writefile pero pisa todo el contenido
    if(err) {
        console.log("ERROR: ",err);
        return;
    }
});*/

/*fs.stat('test.js',  (err, stat) => { 
    if(err) {
        console.log("ERROR: ",err);
        return;
    }

    console.log("Archivo", stat.isFile());
});*/
let index;

 

const server = http.createServer((req, res) => {
    const file = './app' + req.url;
    if(req.method === "GET") {
            fs.stat(file,  (err, stat) => { 
                if(err) {
                    res.write("<h1>404 not found</h1>")
                    res.end();
                    return;
                }
                if(stat.isFile()) {
                    fs.readFile(file, (err, data) => {
                        if(err) {
                            res.end();
                            return;
                        }
                        res.write(data);
                        res.end();
                    });
                } else {
                    res.write("<h1>404 not found</h1>")
                    res.end();
                }
            });
    }
        
});

server.listen(3000);
