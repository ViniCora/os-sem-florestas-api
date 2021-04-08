import express from 'express';
import controller from '../controller/atributeController.js';
import { atributesModel } from '../models/atributesSchema.js';
import multer from 'multer';

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads');
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
});
const upload = multer({storage: storage});
const app = express();

app.get('/players/', controller.findAll);

app.post('/players/',upload.single('playerImage') ,(req, res) => {
    console.log(req.file);
    console.log(req.body);
    var path = null;
    if(req.file == null){
        path = '';
    }else{
        path = req.file.path;
    }
    try {
      const personagem = new atributesModel(
          {
              name: req.body.name,
              jogador: req.body.jogador,
              oficio_pre_base: req.body.oficio_pre_base,
              oficio_base: req.body.oficio_base,
              nascimento: req.body.nascimento,
              força: req.body.força,
              destreza: req.body.destreza,
              carisma: req.body.carisma,
              inteligencia: req.body.destreza,
              resistencia: req.body.resisntecia,
              mira: req.body.mira,
              oficio: req.body.oficio,
              percepcao: req.body.percepcao,
              vida: 100,
              mostrar_tela: req.body.mostrar_tela,
              imagePath: path
          }
      );  
      personagem.save();
      res.send('Personagem inserido com sucesso');
    } catch (error) {
      res
        .status(500)
        .send({ message: error.message || 'Algum erro ocorreu ao salvar' });
    }
  });

app.get('/atributes/', controller.findAtributeByName);

app.put('/atributes/vida/:id', controller.updateVida);

app.put('/atributes/mostrarTela/:id', controller.updateMostrarTela);

app.put('/atributes/forca/:id', controller.updateForca);

app.put('/atributes/destreza/:id', controller.updateDestreza);

app.put('/atributes/carisma/:id', controller.updateCarisma);

app.put('/atributes/inteligencia/:id', controller.updateInteligente);

app.put('/atributes/resistencia/:id', controller.updateResistencia);

app.put('/atributes/mira/:id', controller.updateMira);

app.put('/atributes/oficio/:id', controller.updateOficio);

app.put('/atributes/percepcao/:id', controller.updatePercepcao);


export { app as atributeRouter };