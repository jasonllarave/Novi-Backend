import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatbotRoutes from "./routes/chatbot.routes.js";
import morgan from 'morgan';



dotenv.config();

const app = express();

//configuracion de cors (permite desarrollo local)
app.use(cors());


app.use(express.json());
app.use(morgan('dev'));

// Rutas
app.use("/api/chatbot", chatbotRoutes);

app.get("/", (req, res) => {
  res.send("Servidor del Chatbot activado");
});

//este es el middleware que maneja errores

app.use((err, req, res, next) => { 

  console.error(err.stack);
  res.status(500).send('algo no funciona');

});



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Servidor ejecutándose en puerto ${PORT}`));
