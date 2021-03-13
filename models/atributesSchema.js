import mongoose from 'mongoose';

const atributesSchema = new mongoose.Schema({
  name: { type: String, require: true },
  força: { type: Number, require: true },
  destreza: { type: Number, require: true },
  carisma: { type: Number, require: true },
  inteligencia: { type: Number, require: true },
  resistencia: { type: Number, require: true },
  mira: { type: Number, require: true },
  oficio: { type: Number, require: true },
  percepcao: { type: Number, require: true },
});

const atributesModel = mongoose.model('Messias', atributesSchema, 'Messias');

export { atributesModel };