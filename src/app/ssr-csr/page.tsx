"use client";

import React, { useEffect, useState } from "react";

export default function Page() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Danh sách Bài viết với Refresh</h1>
      <button onClick={fetchPosts}>Refresh</button>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body.substring(0, 100)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
