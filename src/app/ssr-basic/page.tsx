import React from "react";

async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await response.json();

  return data;
}

export default async function page() {
  const data = await fetchData();

  return (
    <div>
      {data?.map((item: any, index: number) => (
        <div key={index}>{item.name}</div>
      ))}
    </div>
  );
}
