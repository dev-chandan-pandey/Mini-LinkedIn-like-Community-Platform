'use client';

import Link from 'next/link';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-100 p-4 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 shadow-md">

      <Link href="/" className="font-bold text-xl text-blue-700">MiniLinkedIn</Link>
      <div className="space-x-4">
        {user ? (
          <>
            <span className="text-gray-700">Hi, {user.name}</span>
            <Link href="/feed" className="text-blue-600 hover:underline">Feed</Link>
            <button onClick={logout} className="text-red-600 hover:underline">Logout</button>
          </>
        ) : (
          <>
            <Link href="/login" className="text-blue-600 hover:underline">Login</Link>
            <Link href="/register" className="text-blue-600 hover:underline">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
