import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { db } from './models/index.js';
import { atributeRouter } from './routes/atributeRouter.js';

(async () => {
  try {
    await db.mongoose
      .connect(
        'mongodb+srv://coradassi:1108@cluster0.hr1zc.mongodb.net/RPGS?retryWrites=true&w=majority',
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      )
      .then(() => {
        console.log('Banco inicializado');
      });
  } catch (error) {
    process.exit();
  }
})();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: 'https://os-sem-floresta-api.herokuapp.com/',
  })
);

app.use(atributeRouter);

app.get('/', (req, res) => {
  res.send('API em execucao');
});

app.listen(PORT = process.env.PORT || 8080 || 8081, () => {});

