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

app.use( (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
  cors({
    origin: 'https://os-sem-floresta-api.herokuapp.com/',
  })
});

app.use(atributeRouter);

app.get('/', (req, res) => {
  res.send('API em execucao');
});
const PORT = process.env.PORT;

console.log(`Listening on ${ PORT }`);

app.listen(PORT || 8080 || 8081, () => {});

