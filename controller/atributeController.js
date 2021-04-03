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

    const value = req.body.value;
  
    try {
      const newAtribute = await atributesModel.findByIdAndUpdate(
        { _id: id },
        {$set :{vida : value}},
        { new: true }
      );
      res.send(newAtribute);
    } catch (error) {
      res.status(500).send({ message: 'Erro ao atualizar o personagem de id: ' + id });
    }
  };

  const updateForca = async (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: 'Dados para atualizacao vazio',
      });
    }
  
    const id = req.params.id;

    const value = req.body.value;
  
    try {
      const newAtribute = await atributesModel.findByIdAndUpdate(
        { _id: id },
        {$set :{força : value}},
        { new: true }
      );
      res.send(newAtribute);
    } catch (error) {
      res.status(500).send({ message: 'Erro ao atualizar o personagem de id: ' + id });
    }
  };

  const updateDestreza = async (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: 'Dados para atualizacao vazio',
      });
    }
  
    const id = req.params.id;

    const value = req.body.value;
  
    try {
      const newAtribute = await atributesModel.findByIdAndUpdate(
        { _id: id },
        {$set :{destreza : value}},
        { new: true }
      );
      res.send(newAtribute);
    } catch (error) {
      res.status(500).send({ message: 'Erro ao atualizar o personagem de id: ' + id });
    }
  };

  const updateCarisma = async (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: 'Dados para atualizacao vazio',
      });
    }
  
    const id = req.params.id;

    const value = req.body.value;
  
    try {
      const newAtribute = await atributesModel.findByIdAndUpdate(
        { _id: id },
        {$set :{carisma : value}},
        { new: true }
      );
      res.send(newAtribute);
    } catch (error) {
      res.status(500).send({ message: 'Erro ao atualizar o personagem de id: ' + id });
    }
  };

  const updateInteligente = async (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: 'Dados para atualizacao vazio',
      });
    }
  
    const id = req.params.id;

    const value = req.body.value;
  
    try {
      const newAtribute = await atributesModel.findByIdAndUpdate(
        { _id: id },
        {$set :{inteligencia : value}},
        { new: true }
      );
      res.send(newAtribute);
    } catch (error) {
      res.status(500).send({ message: 'Erro ao atualizar o personagem de id: ' + id });
    }
  };

  const updateResistencia = async (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: 'Dados para atualizacao vazio',
      });
    }
  
    const id = req.params.id;

    const value = req.body.value;
  
    try {
      const newAtribute = await atributesModel.findByIdAndUpdate(
        { _id: id },
        {$set :{resistencia : value}},
        { new: true }
      );
      res.send(newAtribute);
    } catch (error) {
      res.status(500).send({ message: 'Erro ao atualizar o personagem de id: ' + id });
    }
  };

  const updateMira= async (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: 'Dados para atualizacao vazio',
      });
    }
  
    const id = req.params.id;

    const value = req.body.value;
  
    try {
      const newAtribute = await atributesModel.findByIdAndUpdate(
        { _id: id },
        {$set :{mira : value}},
        { new: true }
      );
      res.send(newAtribute);
    } catch (error) {
      res.status(500).send({ message: 'Erro ao atualizar o personagem de id: ' + id });
    }
  };

  const updateOficio = async (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: 'Dados para atualizacao vazio',
      });
    }
  
    const id = req.params.id;

    const value = req.body.value;
  
    try {
      const newAtribute = await atributesModel.findByIdAndUpdate(
        { _id: id },
        {$set :{oficio : value}},
        { new: true }
      );
      res.send(newAtribute);
    } catch (error) {
      res.status(500).send({ message: 'Erro ao atualizar o personagem de id: ' + id });
    }
  };

  const updatePercepcao = async (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: 'Dados para atualizacao vazio',
      });
    }
  
    const id = req.params.id;

    const value = req.body.value;
  
    try {
      const newAtribute = await atributesModel.findByIdAndUpdate(
        { _id: id },
        {$set :{percepcao : value}},
        { new: true }
      );
      res.send(newAtribute);
    } catch (error) {
      res.status(500).send({ message: 'Erro ao atualizar o personagem de id: ' + id });
    }
  };


export default {findAll, updateVida, updateForca, updateDestreza, updateCarisma, updateInteligente, updateResistencia, updateMira, updateOficio, updatePercepcao};