import express from 'express'

const PORT = 3000

const app = express();

app.get('/', (req, res) => {
    res.json({message: 'hello world'})
})

app.listen(PORT, () => console.log(`server running and listening to port ${PORT}`))