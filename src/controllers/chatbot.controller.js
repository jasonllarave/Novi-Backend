export const handleMessage = async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "No se recibió ningún mensaje" });
  }

  let response = " soy Novi ";

  const msg = message.toLowerCase();

  if (msg.includes("hola")) {
    response = "¡hola desde backend!  ¿En qué puedo ayudarte ?";
  } else if (msg.includes("evento")) {
    response = "sección del sitio.";
  } else if (msg.includes("atiendeme")) {
    response = "Claro, escríbeme tu pregunta, en que puedo ayudarte";
  } else {
    response = "No entendí muy bien, ¿puedes repetirlo o reformular tu mensaje?";
  }

  res.json({ reply: response });
};
