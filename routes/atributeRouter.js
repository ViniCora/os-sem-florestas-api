import express from 'express';
import controller from '../controller/atributeController.js';

const app = express();

app.get('/atributes/', controller.findAll);

app.put('/atributes/:id', controller.updateVida);


export { app as atributeRouter };