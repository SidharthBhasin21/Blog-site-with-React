import { Link } from "react-router-dom";

const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blog/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
            <p> Written by: {blog.Author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default BlogList;
