import { useState, useEffect } from "react";
import BlogPreview from "./BlogPreview";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const handleDelete = (blogID) => {
    const newBlogs = blogs.filter((blog) => blog.id !== blogID);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((response) => response.json())
      .then((blogs) => {
        setBlogs(blogs);
      });
  }, []);

  return (
    <div className="home-content">
      <h2>All Blogs</h2>
      {blogs && <BlogPreview blogs={blogs} handleDelete={handleDelete} />}
    </div>
  );
};

export default Home;
