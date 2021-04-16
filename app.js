import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { db } from './models/index.js';
import { playerRouter } from './routes/playerRouter.js';
import { npcRouter } from './routes/npcRouter.js';
import { constantesRouter } from './routes/constantesRouter.js';
import { iniciativaRouter } from './routes/iniciativaRouter.js';

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
  cors()
);
app.use('/uploads',express.static('uploads'));
app.use(playerRouter);
app.use(npcRouter);
app.use(iniciativaRouter);
app.use(constantesRouter);

app.get('/', (req, res) => {
  res.send('API em execucao');
});
const PORT = process.env.PORT;

console.log(`Listening on ${ PORT }`);

app.listen(PORT || 8080 || 8081, () => {});

