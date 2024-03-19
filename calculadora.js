const numFila = document.getElementById("fila").value
const numCol = document.getElementById("columna").value
const agregarBtn = document.getElementById("crearMatricesBtn")

agregarBtn.addEventListener("click",  ()=> {
  // Limpiamos el contenido anterior de las matrices si existe
  document.getElementById("matriz1Content").innerHTML = "";
  document.getElementById("matriz2Content").innerHTML = "";

  // Creamos los inputs para la matriz 1
  for (var i = 0; i < fila; i++) {
      for (var j = 0; j < columna; j++) {
          var input = document.createElement("input");
          input.type = "number";
          input.className = "border-2 rounded-md border-slate-400 mx-1 mb-1";
          input.placeholder = "Matriz 1 [" + (i + 1) + "][" + (j + 1) + "]";
          document.getElementById("matriz1Content").appendChild(input);
      }
      var br = document.createElement("br");
      document.getElementById("matriz1Content").appendChild(br);
  }

  // Creamos los inputs para la matriz 2
  for (var i = 0; i < fila; i++) {
      for (var j = 0; j < columna; j++) {
          var input = document.createElement("input");
          input.type = "number";
          input.className = "border-2 rounded-md border-slate-400 mx-1 mb-1";
          input.placeholder = "Matriz 2 [" + (i + 1) + "][" + (j + 1) + "]";
          document.getElementById("matriz2Content").appendChild(input);
      }
      var br = document.createElement("br");
      document.getElementById("matriz2Content").appendChild(br);
  }
});






(array1, array2) => {

  if (array1.length !== array2.length || array1[0].length !== array2[0].length) {
    return "El orden de las matrices debe ser igual"
  }

  const result = []

  for (let filas = 0; filas < array1[0].length; filas++) {
    let fila = []
    for (let cols = 0; cols < array2.length; cols++) {
      fila.push(array1[filas][cols] + array2[filas][cols])
    }
    result.push(fila)
  }

  res.setHeader('Content-Type', 'application/javascript');
  return res.end(result)
}


