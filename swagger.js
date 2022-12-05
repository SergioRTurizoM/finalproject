const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Api Ecommerce",
      version: "1.0.0",
      description:
        "API proyecto Academlo",
    },
  },
  apis: [
    "./src/routes/index.js"

  ],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.get("/api/v1/docs.json", (req, res) => {
    res.setHeader("ContentType", "application/json");
    res.send(swaggerSpec);
  });

  console.log(
    `Documentación disponible en http://${process.env.HOST}:${port}/api/v1/docs`
  );
};

module.exports = swaggerDocs;


