let funcion = (param, callback) => {
    if(param === 123)
        callback(null,"Codigo correcto") ;
    else
        callback("Codigo incorrecto");
}

module.exports = { c1 : funcion };