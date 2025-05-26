import React, { useEffect, useLayoutEffect, useState } from "react";

export default function Example2() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  console.log("data", data);

  useEffect(() => {
    console.log("first effect");
  }, []);
  useLayoutEffect(() => {
    console.log("Uselayouteffect");
  }, []);
  return <div>Example2</div>;
}
