"use client";

import React, { useEffect, useState } from "react";

// Render dữ liệu use client
async function fetchData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");

  let data = await response.json();

  return data;
}

export default function page() {
  const [user, setUser] = useState<any>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {user?.map((item: any) => (
        <li>{item.name}</li>
      ))}
    </div>
  );
}
