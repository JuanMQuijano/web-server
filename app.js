const express = require("express");
const hbs = require("hbs");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

//Handlebars

//Habilitar view engine
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

//Servir contenido estatico
app.use(express.static("public"));

app.get("/", (req, res) => {
  //Con render mostramos las vistas de los view engine, con sendFile mostramos archivos de rutas estaticas

  // res.sendFile(__dirname + "/public/generic.html");

  //Podemos pasar variables o información a las vistas
  res.render("home", {
    nombre: "Juan",
    titulo: "Curso de Node",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "Juan",
    titulo: "Curso de Node",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "Juan",
    titulo: "Curso de Node",
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
