"use client";

import React, { useEffect, useState } from "react";

export default function page() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const result = await response.json();

      setData(result);
    }
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {data?.map((item: any, index: number) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
