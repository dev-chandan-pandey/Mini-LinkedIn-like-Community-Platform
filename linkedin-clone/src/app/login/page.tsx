'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Login failed');

      login(data.token, data.user);
      router.push('/feed');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto mt-10 p-6 border rounded-2xl shadow-md bg-white">

      <h2 className="text-2xl font-bold mb-4">Login</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="email" type="email" placeholder="Email" onChange={handleChange}   className="w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-400" required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange}   className="w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-400" required />
        <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md w-full transition">Login</button>
      </form>
    </div>
  );
}
