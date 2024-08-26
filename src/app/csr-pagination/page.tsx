"use client";

import React, { useState, useEffect } from "react";

const PaginationCSR = () => {
  // Khởi tạo state để lưu trữ danh sách các bài viết và số trang hiện tại
  const [posts, setPosts] = useState([]); // posts sẽ chứa toàn bộ dữ liệu bài viết
  const [currentPage, setCurrentPage] = useState(1); // currentPage lưu trữ số trang hiện tại
  const postsPerPage = 5; // Số lượng bài viết được hiển thị trên mỗi trang là 5

  // useEffect để gọi API lấy dữ liệu bài viết sau khi component được render lần đầu
  useEffect(() => {
    const fetchPosts = async () => {
      // Gọi API để lấy danh sách bài viết từ đường dẫn
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      // Chuyển đổi dữ liệu API thành JSON
      const data = await response.json();
      // Lưu trữ dữ liệu vào state posts
      setPosts(data);
    };

    // Gọi hàm fetchPosts để lấy dữ liệu
    fetchPosts();
  }, []); // [] có nghĩa là useEffect chỉ chạy một lần khi component được mount

  // Tính toán chỉ số của bài viết cuối cùng trên trang hiện tại
  const indexOfLastPost = currentPage * postsPerPage;
  // Tính toán chỉ số của bài viết đầu tiên trên trang hiện tại
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // Lấy ra danh sách các bài viết sẽ được hiển thị trên trang hiện tại
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Tính toán tổng số trang dựa trên tổng số bài viết và số bài viết mỗi trang
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // Hàm xử lý khi người dùng bấm nút "Next"
  const handleNextPage = () => {
    // Kiểm tra nếu chưa đến trang cuối cùng thì tăng số trang hiện tại lên 1
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Hàm xử lý khi người dùng bấm nút "Previous"
  const handlePreviousPage = () => {
    // Kiểm tra nếu chưa phải trang đầu tiên thì giảm số trang hiện tại đi 1
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <h1>Phân Trang với CSR</h1>
      <ul>
        {/* Lặp qua danh sách bài viết trên trang hiện tại và hiển thị tiêu đề */}
        {currentPosts.map((post: any) => (
          <li key={post.id}>{post.title}</li> // Mỗi bài viết được render dưới dạng một <li>
        ))}
      </ul>
      <div>
        {/* Nút "Previous", chỉ có thể nhấn nếu không phải là trang đầu tiên */}
        <button
          className="border-solid border-2 border-indigo-600"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {/* Hiển thị số trang hiện tại và tổng số trang */}
        <span>
          Page {currentPage} of {totalPages}
        </span>
        {/* Nút "Next", chỉ có thể nhấn nếu không phải là trang cuối cùng */}
        <button
          className="border-solid border-2 border-indigo-600"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationCSR;
