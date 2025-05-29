import React, { useState } from "react";

export default function useFetch(cb) {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fun = async (...args) => {
    setLoading(true);

    try {
      const res = await cb(...args);
      console.log("res^", res);
      setData(res);
    } catch (error) {
      setError("Something went wrong", error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fun };
}
