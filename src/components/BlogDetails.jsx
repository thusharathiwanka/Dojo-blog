import React from "react";
import { useParams } from "react-router";
import useFetch from "./hooks/useFetch";

function BlogDetails() {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch(
    `http://localhost:8000/blogs/${id}`
  );

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
            <p style={{ width: "100%" }}>{blog.content}</p>
          </div>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;
