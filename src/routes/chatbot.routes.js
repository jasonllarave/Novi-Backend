import { Router } from "express";
import { handleMessage } from "../controllers/chatbot.controller.js";

const router = Router();

router.post("/chatbot", handleMessage);

export default router;
