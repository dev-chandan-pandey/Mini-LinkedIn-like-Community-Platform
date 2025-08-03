'use client';

import { useAuth } from '../context/AuthContext';
import { useEffect, useState } from 'react';

type Post = {
  _id: string;
  author: { name: string,_id:any };
  content: string;
  createdAt: string;
};

export default function FeedPage() {
  const { token, user } = useAuth();
  const [posts, setPosts] = useState<Post[]>([]);
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  // Fetch posts
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/posts');
      const data = await res.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  // Create post handler
  const handlePost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    try {
      const res = await fetch('/api/posts/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ content }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to post');

      setPosts((prev) => [data.post, ...prev]);
      setContent('');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
  <div className="max-w-2xl w-full mx-auto mt-8 px-4 sm:px-6 lg:px-0">

      <h1 className="text-3xl font-bold mb-6">Feed</h1>

      {/* Post form */}
      {user && (
        <form onSubmit={handlePost} className="mb-6">
          <textarea
            className="w-full p-3 border rounded-lg resize-none shadow-sm focus:ring-2 focus:ring-blue-300"
            placeholder="What's on your mind?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          
            rows={3}
          />
          <button
            type="submit"
            className="mt-2 bg-blue-600 text-white px-4 py-2 rounded"
          >
            Post
          </button>
          {error && <p className="text-red-500 mt-1">{error}</p>}
        </form>
      )}

      {/* Posts list */}
      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post._id}
            className="border p-4 rounded-xl shadow-sm bg-white hover:shadow-md transition"
          >
            <p className="text-sm text-gray-600">
              {post.author?.name || 'Anonymous'} ·{' '}
              {new Date(post.createdAt).toLocaleString()}
            </p>
            <p className="mt-2 text-gray-800">{post.content}</p>
            <p className="text-sm text-gray-600">
            {post.author?.name || 'Anonymous'}
            </p>
            <p className="text-sm text-gray-600">
  <a
    href={`/profile/${post?.author?._id}`}
    className="text-blue-600 hover:underline"
  >
    {post.author?.name || 'Anonymous'}
  </a>{' '}
  · {new Date(post.createdAt).toLocaleString()}
  
</p>

          </div>
          
        ))}
      </div>
    </div>
  );
}
