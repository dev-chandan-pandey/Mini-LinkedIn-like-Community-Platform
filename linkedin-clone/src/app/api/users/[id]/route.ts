// src/app/api/users/[id]/route.ts

import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import User from '@/models/User';
import Post from '@/models/Post';

export async function GET(
  req: NextRequest,
  context: { params?: { id?: string } }
) {
  try {
    await dbConnect();

    const userId = context.params?.id;

    if (!userId) {
      return NextResponse.json({ error: 'Missing user ID' }, { status: 400 });
    }

    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const posts = await Post.find({ author: userId }).sort({ createdAt: -1 });

    return NextResponse.json({ user, posts }, { status: 200 });
  } catch (error) {
    console.error('GET /api/users/[id] error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
