import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, isPending, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const history = useHistory();

  const handleClick = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE"
    }).then(() => {
      history.push("/");
    });
  };
  return (
    <div className="blog-details">
      {isPending && (
        <div>
          <h2>Loading...</h2>
        </div>
      )}
      {error && <div>{error}</div>}
      <article>
        <h2>{blog?.title}</h2>
        <p>Blog no.: {blog?.id}</p>
        <p>{blog?.body}</p>
        <button onClick={handleClick}>Delete</button>
      </article>
    </div>
  );
};
export default BlogDetails;
