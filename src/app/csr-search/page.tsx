"use client";

import React, { useState, useEffect } from "react";

const PostSearchPage = () => {
  // Khởi tạo state để lưu trữ danh sách bài viết và từ khóa tìm kiếm
  const [posts, setPosts] = useState([]); // posts chứa toàn bộ danh sách bài viết
  const [searchTerm, setSearchTerm] = useState(""); // searchTerm là từ khóa tìm kiếm do người dùng nhập

  // useEffect để fetch dữ liệu bài viết từ API khi trang được tải
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data); // Lưu dữ liệu bài viết vào state
    };

    fetchPosts(); // Gọi hàm fetchPosts để lấy dữ liệu
  }, []); // useEffect chỉ chạy một lần khi component được mount

  // Lọc danh sách bài viết dựa trên từ khóa tìm kiếm
  const filteredPosts = posts.filter((post: any) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Tìm Kiếm Bài viết (CSR)</h1>
      {/* Ô input để người dùng nhập từ khóa tìm kiếm */}
      <input
        className="border-solid border-2 border-indigo-600"
        type="text"
        placeholder="Nhập từ khóa..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Cập nhật searchTerm khi người dùng nhập từ khóa
      />
      <ul>
        {/* Hiển thị danh sách các bài viết khớp với từ khóa tìm kiếm */}
        {filteredPosts.map((post: any) => (
          <li key={post.id}>{post.title}</li> // Mỗi bài viết được render dưới dạng một <li>
        ))}
      </ul>
    </div>
  );
};

export default PostSearchPage;
