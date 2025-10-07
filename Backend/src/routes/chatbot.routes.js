import { Router } from "express";
import {hanleMessage } from "../controllers/chatbot.controller"

const router = Router();

router.post("/message", handleMessage);

export default router;