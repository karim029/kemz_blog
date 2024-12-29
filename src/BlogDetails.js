import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch(`http://localhost:8000/blogs/${id}`);
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      // Await the fetch call to delete the blog
      await fetch(`http://localhost:8000/blogs/${blog.id}`, {
        method: "DELETE",
      });
      // After the blog is deleted, navigate to the homepage
      navigate("/");
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading... </div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2> {blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
