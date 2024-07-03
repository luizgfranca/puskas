import express from 'express'
import { getRouter } from './router';
import { Datasource } from './db/datasource';

const PORT = 3000
const app = express();

app.use(getRouter())
Datasource.initialize();

app.listen(PORT, () => console.log(`server running and listening to port ${PORT}`))