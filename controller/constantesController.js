import { constantesModel } from '../models/constantesSchema.js';


const findAtributeByName = async (req, res) => {
   const nameReq = req.query.name;
     
   /*  //condicao para o filtro no findAll
    var condition = name
      ? { name: { $regex: new RegExp(name), $options: 'i' } }
      : {}; */
  
    try {
      const atributes = await constantesModel.find({'name': nameReq});
      res.send(atributes);
    } catch (error) {
      res
        .status(500)
        .send({ message: error.message || 'Erro ao listar todos os atributos' });
      
    }
  };


export default {findAtributeByName};