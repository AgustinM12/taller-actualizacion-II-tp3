const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Permitir solicitudes desde cualquier origen
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST'); // Permitir los métodos GET y POST
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Permitir el encabezado Content-Type



  if (req.url === '/sumarMatriz') {

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


  } else if (req.url === '/agregarMatriz') {

    res.setHeader('Content-Type', 'application/javascript');
    res.end("Se ejecutó el procedimiento 2");

  } else {
    res.statusCode = 404;
    res.end('Ruta no encontrada');
  }
});

server.listen(5000, () => {
  console.log('Servidor en ejecución en http://localhost:5000/');
});


