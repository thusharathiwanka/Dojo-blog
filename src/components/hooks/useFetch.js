import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const handleDelete = (blogID) => {
    const newBlogs = data.filter((blog) => blog.id !== blogID);
    setData(newBlogs);
  };

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw Error("Could not fetch the data from that endpoint");
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((error) => {
          setError(error.message);
          setIsPending(false);
        });
    }, 1000);
  }, [url]);

  return { data, isPending, error, handleDelete };
};

export default useFetch;
