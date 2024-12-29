import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const Navigation = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);

    try {
      // Make the POST request using async/await
      const response = await fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      });

      // Check if the response is successful
      if (!response.ok) {
        throw new Error("Failed to create blog");
      }

      console.log("New blog added");

      // Artificial delay (simulating processing time)
      setTimeout(() => {
        setIsPending(false);
        setAuthor("mario");
        setBody("");
        setTitle("");
        setSuccessMessage("Blog created successfully!");

        // Clear success message after 1.5 seconds
        setTimeout(() => {
          setSuccessMessage("");
          Navigation("/");
        }, 1500);
      }, 2000); // Spinner will be visible for at least 2 seconds
    } catch (error) {
      console.error("Error adding blog:", error);
      setIsPending(false);
    }
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <button disabled={isPending}>
          {isPending ? <div className="loading-spinner" /> : "Add Blog"}
        </button>
      </form>
    </div>
  );
};

export default Create;
