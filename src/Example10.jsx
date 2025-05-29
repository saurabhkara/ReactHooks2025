import React, { useEffect } from "react";
import useFetch from "./customHook/useFetch.jsx";

export default function Example10() {
  const fetchPost = () => {
    return fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => data);
  };

  const { data, error, loading, fun } = useFetch(fetchPost);

  useEffect(() => {
    fun();
  }, []);

  return (
    <div>
      <h2>Custom hook</h2>
      {loading
        ? "Loading..."
        : data?.map((item) => {
            return <p key={item.id}>{item.title}</p>;
          })}
      {error && <p>Error occurred</p>}
    </div>
  );
}
