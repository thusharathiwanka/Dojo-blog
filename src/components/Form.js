const Form = () => {
  return (
    <form action="" className="new-blog-form">
      <div className="blog-title">
        <label htmlFor="title">Blog Title</label>
        <input type="text" name="title" id="blog-title" />
      </div>
      <div className="blog-content">
        <label htmlFor="blog-content">Blog Content</label>
        <textarea
          name="blog-content"
          id="blog-content"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div className="blog-author">
        <label htmlFor="author">Author's Name</label>
        <input type="text" name="author" id="author-name" />
      </div>
      <button type="submit">Submit Blog</button>
    </form>
  );
};

export default Form;
