import express from 'express';
import { errors } from 'celebrate';
import { createConnection } from 'typeorm';
import router from './routes';

const app = express();
app.use(express.json());

app.use(router);
app.use(errors());

const port = process.env.PORT ?? 3333;

createConnection()
    .then(() => {
        console.log('Connected to the database.');
        app.listen(port, () => console.log(`Listening on port ${port}`));
    })
    .catch((err) => {
        console.error(`Error connecting to the database: ${err}`);
    });
