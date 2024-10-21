import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
  },
  category:{
    type: String,
    required: [true, 'Product category is required']
  },
  description: {
    type: String,
    required: [true, 'Product description is required'],
  },
  price: {
    type: Number,
    required: [true, 'Product price is required'],
  },
  image: {
    type: String,
  },
});

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);