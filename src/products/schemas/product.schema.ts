import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  id: String,
  name: String,
  price: Number,
  category: String,
  manufacturer: String,
  color: String,
  model: String,
  description: String,
});
