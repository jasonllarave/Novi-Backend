import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatbotRoutes from "./routes/chatbot.routes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/chatbot", chatbotRoutes);

app.get("/", (req, res) => {
  res.send("Servidor del Chatbot activado");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor ejecutándose en puerto ${PORT}`));
