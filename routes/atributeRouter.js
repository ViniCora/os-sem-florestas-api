import express from 'express';
import controller from '../controller/atributeController.js';

const app = express();

app.get('/atributes/', controller.findAll);

app.put('/atributes/vida/:id', controller.updateVida);

app.put('/atributes/forca/:id', controller.updateForca);

app.put('/atributes/destreza/:id', controller.updateDestreza);

app.put('/atributes/carisma/:id', controller.updateCarisma);

app.put('/atributes/inteligencia/:id', controller.updateInteligente);

app.put('/atributes/resistencia/:id', controller.updateResistencia);

app.put('/atributes/mira/:id', controller.updateMira);

app.put('/atributes/oficio/:id', controller.updateOficio);

app.put('/atributes/percepcao/:id', controller.updatePercepcao);


export { app as atributeRouter };