const BlogPreview = ({ blogs, handleDelete }) => {
  return (
    <div className="blogs-content">
      {blogs.map((blog) => {
        return (
          <div className="blog-preview" key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            <p>By {blog.author}</p>
            <button
              onClick={() => {
                handleDelete(blog.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default BlogPreview;
