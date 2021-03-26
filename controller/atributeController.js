import { db } from '../models/index.js';
import { atributesModel } from '../models/atributesSchema.js';

const findAll = async (req, res) => {
   const nameReq = req.query.name;
    console.log("Nome: " + nameReq);
  
   /*  //condicao para o filtro no findAll
    var condition = name
      ? { name: { $regex: new RegExp(name), $options: 'i' } }
      : {}; */
  
    try {
      const atributes = await atributesModel.find({'name': nameReq});
      res.send(atributes);
    } catch (error) {
      res
        .status(500)
        .send({ message: error.message || 'Erro ao listar todos os atributos' });
      
    }
  };

  const updateVida = async (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: 'Dados para atualizacao vazio',
      });
    }
  
    const id = req.params.id;

    const vida = req.body.vida;
  
    try {
      const newAtribute = await atributesModel.findByIdAndUpdate(
        { _id: id },
        {$set :{vida : vida}},
        { new: true }
      );
      res.send(newAtribute);
    } catch (error) {
      res.status(500).send({ message: 'Erro ao atualizar o personagem de id: ' + id });
    }
  };

export default {findAll, updateVida};