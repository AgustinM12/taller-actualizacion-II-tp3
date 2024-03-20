let numFilaInput = document.getElementById("fila");
let numColInput = document.getElementById("columna");
const agregarBtn = document.getElementById("crearMatricesBtn");
const calcularBtn = document.getElementById("calcular");
const sectionResult = document.getElementById("sectionResult");
const divResult = document.getElementById("divResult");
const matriz1 = document.getElementById("matriz1Content");
const matriz2 = document.getElementById("matriz2Content");


// ! FUNCIONES
function crearMatrices() {
  matriz1.innerHTML = "";
  matriz2.innerHTML = "";
  let numFila = parseInt(numFilaInput.value);
  let numCol = parseInt(numColInput.value);

  console.log(numFila, numCol);

  if (numFila > 0 && numCol > 0) {
    // * Creamos los inputs para la matriz 1
    for (let i = 0; i < numFila; i++) {
      let nuevaFila = document.createElement("div")
      nuevaFila.className = "flex justify-center items-center";

      for (let j = 0; j < numCol; j++) {
        let input = document.createElement("input");
        input.type = "number";
        input.className = "border-2 rounded-md border-slate-400 inputMatriz1";
        input.required = true;
        nuevaFila.appendChild(input);
      }
      matriz1.appendChild(nuevaFila);
    }

    // * Creamos los inputs para la matriz 2
    for (let i = 0; i < numFila; i++) {
      let nuevaFila = document.createElement("div")
      nuevaFila.className = "flex justify-center items-center";

      for (let j = 0; j < numCol; j++) {
        let input = document.createElement("input");
        input.type = "number";
        input.className = "border-2 rounded-md border-slate-400 inputMatriz2";
        input.required = true;
        nuevaFila.appendChild(input);
      }
      matriz2.appendChild(nuevaFila);
    }
    sectionResult.classList.remove("hidden");
    calcularBtn.classList.remove("hidden");
  }
}

async function capturarValores(params) {

  let primerMatriz = [];
  let segundaMatriz = [];

  const inputMatriz1 = document.querySelectorAll('.inputMatriz1');
  const inputMatriz2 = document.querySelectorAll('.inputMatriz2');

  inputMatriz1.forEach((input) => {
    primerMatriz.push(parseInt(input.value));
  });


  inputMatriz2.forEach((input) => {
    segundaMatriz.push(parseInt(input.value));
  });

  const res = await fetch('/arrayCalculation', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ array1: primerMatriz, array2: segundaMatriz })
  });


}



// ! EVENTOS
agregarBtn.addEventListener("click", () => {
  crearMatrices();
});
