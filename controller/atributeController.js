import { db } from '../models/index.js';
import { atributesModel } from '../models/atributesSchema.js';

const findAll = async (req, res) => {
    const nameReq = req.body.name;
    console.log(nameReq)
  
   /*  //condicao para o filtro no findAll
    var condition = name
      ? { name: { $regex: new RegExp(name), $options: 'i' } }
      : {}; */
  
    try {
      const atributes = await atributesModel.find({'name': nameReq});
      console.log(atributes);
      res.send(atributes);
    } catch (error) {
      res
        .status(500)
        .send({ message: error.message || 'Erro ao listar todos os atributos' });
      
    }
  };

export default {findAll};