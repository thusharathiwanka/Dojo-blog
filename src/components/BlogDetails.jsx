import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import useFetch from "./hooks/useFetch";

function BlogDetails() {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch(
    `http://localhost:8000/blogs/${id}`
  );
  const history = useHistory();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {error && <p className="notify error">{error}</p>}
      {isPending && <p className="notify">Loading...</p>}
      {blog && (
        <article>
          <h2 style={{ textAlign: "left", paddingBottom: ".5rem" }}>
            {blog.title}
          </h2>
          <p style={{ paddingBottom: "2rem" }}>By {blog.author}</p>
          <div className="blog-content">
            <p style={{ paddingBottom: "2rem" }}>{blog.content}</p>
          </div>
          {!isDeleting ? (
            <button onClick={handleDelete}>Delete</button>
          ) : (
            <button disabled>Deleting</button>
          )}
        </article>
      )}
    </div>
  );
}

export default BlogDetails;
