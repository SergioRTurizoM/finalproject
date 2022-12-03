const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const db = require("./utils/database.js");
const handleError = require("./middlewares/error.middleware");
const initModel = require("./models/initModels.models");
const { usersRoutes, productsRoutes, authRoutes } = require("./routes");

const app = express();

//middelwares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

initModel();

db.authenticate()
  .then(() => console.log("Autenticación exitosa"))
  .catch((error) => console.log(error));

db.sync({ force: false })
  .then(() => console.log("Base de datos sincronizada"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  console.log("Bienvenido al server");
});

const urlBasica = "/api/v1/";

app.use(urlBasica, usersRoutes);
app.use(urlBasica, authRoutes);
app.use(urlBasica, productsRoutes);

app.use(handleError);

module.exports = app;
