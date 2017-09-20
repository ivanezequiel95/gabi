var xhr;

function enviarDatos(urlPath, method, key, value, func) {
    let atributes = key + "=" + encodeURIComponent(value);
    // = encodeURIComponent(atributes)
    method = method.toUpperCase();
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = func;
    xhr.open(method, urlPath, true);
    if(method == "POST")
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(atributes);
}

function getPersonas() {
    var resultados = document.getElementById("resultados");
    if (xhr.readyState == 4) 
    {
        if(xhr.status == 200)
        {
            resultados.innerHTML = 'Llego.';
        }else{
            resultados.innerHTML = 'Algo salio mal.';
        }
        
    }else{
        resultados.innerHTML = 'Procesando...';
    }
}