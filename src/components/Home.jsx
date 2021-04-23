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
      {error && <p style={errorStyles}>{error}</p>}
      {isPending && <p style={commonStyles}>Loading...</p>}
      {blogs && <BlogPreview blogs={blogs} handleDelete={handleDelete} />}
    </div>
  );
};

export default Home;
