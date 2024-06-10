import express, { Request, Response } from 'express'
import dotenv from 'dotenv';
import { MessageWebhookRequest } from './webhook';
import { sendMessage } from './message';

dotenv.config();

// Inicializa o express e define uma porta
const app = express()
const PORT = 3000
// Indica para o express usar o JSON parsing do body-parser
app.use(express.json())

app.get('/ping', (req: Request, res: Response) => {
    console.log(req.body) // Exibe no console da aplicação o objeto da mensagem
    res.write('pong')
    res.status(200).end() // Responde quem solicitou nosso webhook com status 200
})

app.post('/hook', async (req: Request, res: Response) => {
    console.log(JSON.stringify(req.body, null, 2)) // Exibe no console da aplicação o objeto da mensagem
    const data = req.body as MessageWebhookRequest;

    if(data.message.contents[0].text.toUpperCase() === 'PING') {
        const result = await sendMessage(data.message.to, data.message.from, 'pong');
        console.log('sent', result)
        if(result) {
            res.json(result)
        }
    }

    res.status(200).end() // Responde quem solicitou nosso webhook com status 200
})
// Inicia o express na porta definida anteriormente
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
console.log('running on env: ' + process.env.ENV);