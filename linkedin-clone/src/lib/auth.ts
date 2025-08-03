import jwt from 'jsonwebtoken';
import { NextRequest } from 'next/server';

const JWT_SECRET = process.env.JWT_SECRET || 'defaultsecret';

export function verifyToken(token: string) {
  try {
    console.log(jwt.verify(token, JWT_SECRET),"v token")
    return jwt.verify(token, JWT_SECRET) as { id: string };
  } catch (err) {
    return null;
  }
}
export function getTokenFromHeader(req: NextRequest) {
  const authHeader = req.headers.get('authorization');
  // console.log(authHeader.split(' ')[1],"auth")
  if (!authHeader || !authHeader.startsWith('Bearer ')) return null;
  return authHeader.split(' ')[1];
}