let db;

function iniciarDb() {
    indexedDB = indexedDB || mozIndexedDB || webkitIndexedDB || msIndexedDB;
    IDBTransaction = IDBTransaction || webkitIDBTransaction || msIDBTransaction;
    IDBKeyRange = IDBKeyRange || webkitIDBKeyRange || msIDBKeyRange;

    if (!indexedDB) {
        console.log("Su navegador no soporta una versión estable de indexedDB.Tal y como las características no serán validas");
    }
    db = indexedDB.open("midb", 1);

    db.onupgradeneeded = function(event) {
        db = event.target;
        let objectStore = db.result.createObjectStore("personas", { keyPath: "legajo", autoIncrement: true, unique: true });
    }
}

function cargar(nombre) {
  let active = db.result;
  let data = active.transaction(["personas"], "readwrite");
  let personas = data.objectStore("personas");

  let request = personas.add({
    nombre: nombre
  })

  request.onerror = (e) => {
    alert(request.error.nombre + '\n\n' + request.error.message);
  }
}

function mostrar() {
  let active = db.result;
  let data = active.transaction(["personas"], "readwrite");
  let personas = data.objectStore("personas");
  let elements = [];

  personas.openCursor().onsuccess = (e) => {
    let result = e.target.result

    if(result === null)
      return;

    elements.push(result.value);
    result.continue();
  }

  data.oncomplete = (e) => {
    console.log(elements);
  } 
}

iniciarDb();

db.onsuccess = (event) => {
    db = event.target;
}

self.addEventListener('message', (e) => {
    console.log("Mensaje en el worker",e.data);
    cargar(e.data);
    mostrar();  
});

self.onerror = (e) => {
    console.log("Error en Mi WW", e);
}