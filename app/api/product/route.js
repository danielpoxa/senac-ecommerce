import { NextResponse } from 'next/server';
import clientPromise from '../../../utils/db';
import Product from '../../../models/ProductModel';
import mongoose from 'mongoose';

// Método GET: Retorna todos os produtos
export async function GET() {
  await clientPromise;

  if (!mongoose.connection.readyState) {
    await mongoose.connect(process.env.MONGODB_URI);
  }

  const products = await Product.find({});
  return NextResponse.json(products);
}

// Método POST: Cria um novo produto (gerenciado por você)
export async function POST(req) {
  const { name, description, category, price, image } = await req.json();
  await clientPromise;

  if (!mongoose.connection.readyState) {
    await mongoose.connect(process.env.MONGODB_URI);
  }

  const newProduct = new Product({ name, description, category, price, image });
  await newProduct.save();
  return NextResponse.json({ message: 'Product added' }, { status: 201 });
}