let posts = new Map();

function leerJSON() {
  fetch("json/alumno.json")
  .then(response => {
    if (response.ok)
      return response.json();
    else
      throw new Error(response.status);
  })
  .then(data => {
    procesar(data);
  })
  .catch(err => {
    procesar("ERROR: ", err.status);
  });
}

function procesar(datos) {
  for (let i in datos) {
    posts.set(datos[i].idalumno, datos[i]);
  }
  document.getElementById("datos").innerText = "Tenemos "+posts.size+ " alumnos";
}

function verTodos() {
  let capaPost = document.getElementById("listaPost");
  capaPost.innerHTML = "";
  for (let post of posts.values()) {
    let nodo = document.createElement("p");
    let texto = "Id Alumno: " + post.idalumno + "<br>" +
      "Nombre: " + post.nombre +  "<br>" +
      "Apellidos: " + post.apellidos + "<br>" + "Calificaciones" + "<br>" +
      "Asignatura: " + post.calificaciones.asignatura + "<br>" +
      "Nota: " + post.calificaciones.nota + "</br>" + "<hr>";
    nodo.innerHTML = texto;
    capaPost.appendChild(nodo);
  }
}

function verAlumnoID() {
  let capaPost = document.getElementById("listaPost");
  capaPost.innerHTML = "";
  let num = document.getElementById("numero").value;
  if (num=="") {
    capaPost.innerHTML = "Debes escribir número de usuario";
    return;
  }

  for (let post of posts.values()) {
    if (post.idalumno == num) {
      let nodo = document.createElement("p");
      let texto = "Id Alumno: " + post.idalumno + "<br>" +
      "Nombre: " + post.nombre +  "<br>" +
      "Apellidos: " + post.apellidos + "<br>" + "Calificaciones" + "<br>" +
      "Asignatura: " + post.calificaciones.asignatura + "<br>" +
      "Nota: " + post.calificaciones.nota;
      nodo.innerHTML = texto;
      capaPost.appendChild(nodo);
    }
  }
}

function verAlumnoNombre() {
  let capaPost = document.getElementById("listaPost");
  capaPost.innerHTML = "";
  let nombre = document.getElementById("nombre").value;
  if (nombre=="") {
    capaPost.innerHTML = "Debes escribir número de usuario";
    return;
  }

  for (let post of posts.values()) {
    if (post.nombre == nombre) {
      let nodo = document.createElement("p");
      let texto = "Id Alumno: " + post.idalumno + "<br>" +
      "Nombre: " + post.nombre +  "<br>" +
      "Apellidos: " + post.apellidos + "<br>" + "Calificaciones" + "<br>" +
      "Asignatura: " + post.calificaciones.asignatura + "<br>" +
      "Nota: " + post.calificaciones.nota;
      nodo.innerHTML = texto;
      capaPost.appendChild(nodo);
    }
  }
}

function verAlumnoApellidos() {
  let capaPost = document.getElementById("listaPost");
  capaPost.innerHTML = "";
  let apellidos = document.getElementById("apellidos").value;
  if (apellidos=="") {
    capaPost.innerHTML = "Debes escribir número de usuario";
    return;
  }

  for (let post of posts.values()) {
    if (post.apellidos == apellidos) {
      let nodo = document.createElement("p");
      let texto = "Id Alumno: " + post.idalumno + "<br>" +
      "Nombre: " + post.nombre +  "<br>" +
      "Apellidos: " + post.apellidos + "<br>" + "Calificaciones" + "<br>" +
      "Asignatura: " + post.calificaciones.asignatura + "<br>" +
      "Nota: " + post.calificaciones.nota;
      nodo.innerHTML = texto;
      capaPost.appendChild(nodo);
    }
  }
}
