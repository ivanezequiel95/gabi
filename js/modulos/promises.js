let prueba = (param) => {
    let prueba = "";
    prueba += param;
    return prueba;
}

let promise = new Promise((resolve, reject) => {
     setTimeout(() => {
       let test = prueba("Funca");
       resolve(test);
    }, 1000);
});


module.exports = { p1: promise };