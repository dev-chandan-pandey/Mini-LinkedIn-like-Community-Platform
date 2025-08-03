import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Post from '@/models/Post';
import { getTokenFromHeader, verifyToken } from '@/lib/auth';
import User from '@/models/User';
export async function POST(req: NextRequest) {
  await dbConnect();

  const token = getTokenFromHeader(req);
  // console.log(verifyToken(token),"token")
  const payload = token ? verifyToken(token) : null;
  if (!payload) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { content } = await req.json();
  if (!content) {
    return NextResponse.json({ error: 'Content required' }, { status: 400 });
  }
 const existingUser = await User.findOne({ _id:payload.id });
  if (!existingUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 400 });
    }
  const post = await Post.create({
    author: existingUser,
    content,
  });
  return NextResponse.json({ message: 'Post created', post });
}
