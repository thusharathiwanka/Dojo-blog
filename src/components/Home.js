import { useState } from "react";
import BlogPreview from "./BlogPreview";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Apple may be giving up on the iPhone 12 mini",
      content:
        "To appease iPhone fans, Apple included a smaller version of the phone in its iPhone 12 lineup...",
      author: "Kevin Raposo",
    },
    {
      id: 2,
      title: "Coumi ANC-860 earbuds are a perfect all-round option",
      content:
        "Ever since the days of my Sony Walkman, I have always preferred over-heads as opposed to...",
      author: "Sophia Waterfield",
    },
    {
      id: 3,
      title:
        "You’ll soon be able to schedule outgoing texts in Google Messages",
      content:
        "If you’re an Android user, go see if your Google Messages app now has the power to...",
      author: "Joe Jones",
    },
  ]);

  const handleDelete = (blogID) => {
    const newBlogs = blogs.filter((blog) => blog.id !== blogID);
    setBlogs(newBlogs);
  };

  return (
    <div className="home-content">
      <h2>All Blogs</h2>
      <BlogPreview blogs={blogs} handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
