import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Post from '@/models/Post';

export async function GET(req: NextRequest) {
  await dbConnect();

  const posts = await Post.find({})
    .sort({ createdAt: -1 })
    .populate('author', 'name');

  return NextResponse.json(posts);
}
