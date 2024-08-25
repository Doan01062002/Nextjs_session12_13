// "use client";

import React from "react";

async function fetchData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");

  let data = await response.json();

  return data;
  // .then((response) => {
  //   response.json();
  // })
  // .then((data) => {
  //   console.log("gias trij trar vef", data);
  //   return data;
  // })
  // .catch((err) => console.log(err));
}

export default async function page() {
  /**
   * Nextjs có 2 loại component
   * 1/ Client component
   * 2/ Server component
   * khi tạo 1 component thì mặc định sẽ là server component
   * -chạy môi trg server
   * -console
   * -khi muốn dùng aleart thì gọi aleart
   *- SSR server side rendering lấy dữ liệu ở phía server sau đó trả kết quả về client, tối ưu SEO
   */
  const data = await fetchData();

  return (
    <div>
      {data?.map((item: any, index: number) => (
        <div key={index}>{item.name}</div>
      ))}
    </div>
  );
}
