import BlogPreview from "./BlogPreview";
import useFetch from "./hooks/useFetch";

const Home = () => {
  const { data: blogs, isPending, error, handleDelete } = useFetch(
    "http://localhost:8000/blogs"
  );

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
      {error && <p className="notify error">{error}</p>}
      {isPending && <p className="notify">Loading...</p>}
      {blogs && <BlogPreview blogs={blogs} handleDelete={handleDelete} />}
    </div>
  );
};

export default Home;
