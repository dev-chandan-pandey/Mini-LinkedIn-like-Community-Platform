'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

type Post = {
  _id: string;
  content: string;
  createdAt: string;
};

type ProfileData = {
  name: string;
  email: string;
  bio: string;
  posts: Post[];
};

export default function ProfilePage() {
  const { id } = useParams();
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        console.log(id,"id")
        const res = await fetch(`/api/users/${id}`);
        const data = await res.json();
        setProfile({...data.user,posts:data.posts});
      } catch (err) {
        console.error('Failed to fetch profile:', err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProfile();
  }, [id]);
  
  if (loading) return <div className="text-center mt-10">Loading...</div>;

  if (!profile) return <div className="text-center mt-10 text-red-500">User not found.</div>;

  return (
    <div className="max-w-2xl w-full mx-auto mt-10 px-4 sm:px-6">
      <div className="mb-6 p-4 border rounded-2xl bg-white shadow-md">
        <h1 className="text-2xl font-bold">{profile.name}</h1>
        <p className="text-sm text-gray-600">{profile.email}</p>
        <p className="mt-2">{profile.bio}</p>
      </div>

      <h2 className="text-xl font-semibold mb-4">Posts</h2>
      {profile.posts.length === 0 ? (
        <p className="text-gray-500">No posts yet.</p>
      ) : (
        <div className="space-y-4">
          {profile.posts.map((post) => (
            <div key={post._id}className="p-4 border rounded-xl bg-white shadow-sm hover:shadow-md transition">
              <p className="text-sm text-gray-600">
                {new Date(post.createdAt).toLocaleString()}
              </p>
              <p className="mt-1 text-gray-800">{post.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
