import React from "react";

// Hàm này được sử dụng để lấy dữ liệu và render nội dung bài viết
const PostDetail = async ({ params }: { params: any }) => {
  // Gọi API để lấy dữ liệu chi tiết bài viết dựa trên id
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await response.json();

  // Render chi tiết bài viết
  return (
    <div>
      <h1>Chi tiết Bài viết với Static Params</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetail;
