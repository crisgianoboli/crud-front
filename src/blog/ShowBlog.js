import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const URI = "http://localhost:8000/blogs/";

function CompShowBlog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);

  //Procedimiento para mostrar todos los blogs
  const getBlogs = async () => {
    const res = await axios.get(URI);
    setBlogs(res.data);
  };

  //Procedimiento para eliminar un blog
  const deleteBlog = async (id) => {
    await axios.delete(`${URI}${id}`);
    getBlogs();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Link to="/create" className="btn btn-primary mt-2 mb-2">
            Create
          </Link>
          <table className="table">
            <thead className="table-primary">
              <tr>
                <th>Title</th>
                <th>Content</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog.id}>
                  <td> {blog.title} </td>
                  <td> {blog.content} </td>
                  <td>
                    <Link to={`/edit/${blog.id}`} className="btn btn-info m-2">
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteBlog(blog.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CompShowBlog;
