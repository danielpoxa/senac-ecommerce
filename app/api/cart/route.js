import { NextResponse } from 'next/server';
import clientPromise from '../../../utils/db';
import CartItem from '../../../models/CartItem';
import mongoose from 'mongoose';

// Método GET: Recupera itens do carrinho
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get('userId');
  await clientPromise;

  if (!mongoose.connection.readyState) {
    await mongoose.connect(process.env.MONGODB_URI);
  }

  const cartItems = await CartItem.find({ userId }).populate('productId');
  return NextResponse.json(cartItems);
}

// Método POST: Adiciona produto ao carrinho
export async function POST(req) {
  const { userId, productId, quantity } = await req.json();
  await clientPromise;

  if (!mongoose.connection.readyState) {
    await mongoose.connect(process.env.MONGODB_URI);
  }

  const newItem = new CartItem({ userId, productId, quantity });
  await newItem.save();
  return NextResponse.json({ message: 'Item added to cart' }, { status: 201 });
}

// Método DELETE: Remove produto do carrinho
export async function DELETE(req) {
  const { userId, productId } = await req.json();
  await clientPromise;

  if (!mongoose.connection.readyState) {
    await mongoose.connect(process.env.MONGODB_URI);
  }

  await CartItem.findOneAndDelete({ userId, productId });
  return NextResponse.json({ message: 'Item removed from cart' }, { status: 200 });
}