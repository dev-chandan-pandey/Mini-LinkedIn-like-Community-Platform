// src/app/api/users/[id]/route.ts

import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import User from '@/models/User';
import Post from '@/models/Post';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await dbConnect();
//    console.log(id,"param")
    const user = await User.findById(params.id);
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const posts = await Post.find({ author: params.id }).sort({ createdAt: -1 });

    return NextResponse.json({ user, posts }, { status: 200 });
  } catch (error) {
    console.error('GET /api/users/[id] error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
