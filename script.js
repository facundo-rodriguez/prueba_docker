
import app from "./app.js";

app.get("/", (req, res) => {
  res.send("Hola desde Express en Docker");
});

app.get("/hola/:nombre", (req, res) => {
  const nombre = req.params.nombre;
  res.send(`Hola ${nombre} desde Express en Docker`);
});
