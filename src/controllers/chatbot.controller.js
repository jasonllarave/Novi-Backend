import {getChatbotResponse} from '../utils/responses.js';



//contador de mensajes

let messageCount = 0;


export const handleMessage =  (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "No se recibió ningún mensaje" });
  }
const response = getChatbotResponse(message);

//incrementar el contador de mensajes

messageCount++;

ReadableByteStreamController.json({reply: response, messageCount: messageCount});

};
