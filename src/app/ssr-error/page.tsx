import React from "react";

const fetchPostsWithError = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/nonexistent-url"
    );
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default async function Page() {
  const posts: any = await fetchPostsWithError();

  if (!posts) {
    return (
      <div>
        <h1>Xử lý Lỗi với SSR</h1>
        <p>Đã xảy ra lỗi trong quá trình tải dữ liệu.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Xử lý Lỗi với SSR</h1>
      <ul>
        {/* {posts?.map((post: any) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body.substring(0, 100)}...</p>
          </li>
        ))} */}
      </ul>
    </div>
  );
}
