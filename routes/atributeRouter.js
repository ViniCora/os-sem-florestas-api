import express from 'express';
import controller from '../controller/atributeController.js';

const app = express();

app.get('/atributes/', controller.findAll);


export { app as atributeRouter };