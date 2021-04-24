import { useState } from "react";
import { useHistory } from "react-router-dom";

const Form = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBlog = { title, content, author };
    setIsAdding(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBlog),
    }).then(() => {
      setTitle("");
      setContent("");
      setAuthor("");
      history.push("/");
    });
  };

  return (
    <form className="new-blog-form" onSubmit={handleSubmit}>
      <div className="blog-title">
        <label htmlFor="blog-title">Blog Title</label>
        <input
          type="text"
          name="title"
          id="blog-title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="blog-content">
        <label htmlFor="blog-content">Blog Content</label>
        <textarea
          name="blog-content"
          id="blog-content"
          cols="30"
          rows="10"
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <div className="blog-author">
        <label htmlFor="author-name">Author's Name</label>
        <input
          type="text"
          name="author"
          id="author-name"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      {!isAdding ? (
        <button type="submit">Submit Blog</button>
      ) : (
        <button type="submit" disabled>
          Submitting
        </button>
      )}
    </form>
  );
};

export default Form;
