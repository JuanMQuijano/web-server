const http = require("http");

//Req es lo que solicita el cliente
//Res es la respuesta del servidor
http.createServer((req, res) => {
  res.write("Hola Mundo!");
  res.end()
}).listen(8080);
