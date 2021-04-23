import { useState, useEffect } from "react";
import BlogPreview from "./BlogPreview";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const handleDelete = (blogID) => {
    const newBlogs = blogs.filter((blog) => blog.id !== blogID);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((response) => {
          if (!response.ok) {
            throw Error("Could not fetch the data");
          }
          return response.json();
        })
        .then((blogs) => {
          setBlogs(blogs);
          setIsPending(false);
          setError(null);
        })
        .catch((error) => {
          setError(error.message);
          setIsPending(false);
        });
    }, 2000);
  }, []);

  const commonStyles = {
    textAlign: "center",
    paddingTop: "10rem",
  };

  const errorStyles = {
    textAlign: "center",
    paddingTop: "10rem",
    color: "red",
  };

  return (
    <div className="home-content">
      <h2>All Blogs</h2>
      {error && <p style={errorStyles}>{error}</p>}
      {isPending && <p style={commonStyles}>Loading...</p>}
      {blogs && <BlogPreview blogs={blogs} handleDelete={handleDelete} />}
    </div>
  );
};

export default Home;
