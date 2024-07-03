import express from 'express'
import { getRouter } from './router';

const PORT = 3000
const app = express();

app.use(getRouter())

app.listen(PORT, () => console.log(`server running and listening to port ${PORT}`))