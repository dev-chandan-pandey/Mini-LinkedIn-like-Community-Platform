import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Post from '@/models/Post';
import { getTokenFromHeader, verifyToken } from '@/lib/auth';

export async function POST(req: NextRequest) {
  await dbConnect();

  const token = getTokenFromHeader(req);
  console.log(verifyToken(token),"token")
  const payload = token ? verifyToken(token) : null;
  if (!payload) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { content } = await req.json();
  if (!content) {
    return NextResponse.json({ error: 'Content required' }, { status: 400 });
  }
 console.log(req.body,"req")
  const post = await Post.create({
    author: payload.id,
    content,
  });

  return NextResponse.json({ message: 'Post created', post });
}
