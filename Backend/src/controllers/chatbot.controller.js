


export const hanleMessage = async (req, res) => {

    const {message} = req.body;

    if(!message){
return res.status(400).json({error: "no hay mensaje"});

        let response = "Hola soy novi";

        if (messsage.tolowerCase().includes ("hola")){
            response = "saludos desde el back";
            }else if (message.tolowerCase().includes("evento si")) {
                response = "estoy en el inicio";
                }else if(message.tolowerCase().includes("atiendeme")){
                    response = "escribe tu pregunta";
                }
        
        
    }

    res,json({ reply: response});

};