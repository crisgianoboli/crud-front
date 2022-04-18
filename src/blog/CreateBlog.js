import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const URI = "http://localhost:8000/blogs/";

function CompCreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  // Procedimiento guardar
  const store = (e) => {
    e.preventDefault();
    axios.post(URI, {
      title: title,
      content: content,
    });
    navigate("/");
  };

  return (
    <div>
      <h3>Create form</h3>
      <form onSubmit={store}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Store
        </button>
      </form>
    </div>
  );
}

export default CompCreateBlog;
