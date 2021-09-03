import express from 'express';
import { errors } from 'celebrate';
import router from './routes';

const app = express();
app.use(express.json());
app.use(errors());

app.use(router);

const port = process.env.PORT ?? 3333;
app.listen(port, () => console.log(`Listening on port ${port}`));
