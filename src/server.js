const app = require("./app");
require("dotenv").config();
const swaggerDocs = require('../swagger');


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
  swaggerDocs(app, PORT)
});
