import Express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const app = Express();

app.listen(3000, () => console.log("server running"));

const swaggerOpt = {
  swaggerDefinition: {
    info: {
      title: "Hello World",
      version: "1.0.0",
    },
  },
  apis: ["docs.json"], // files containing annotations as above
};

const swaggerDoc = swaggerJSDoc(swaggerOpt);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));


app.get("/books", (req, res) => {
  res.send([
    {
      id: 1,
      title: "Harry Potter",
    },
  ]);
});


app.post("/books", (req, res) => {
  res.status(201).send();
});
