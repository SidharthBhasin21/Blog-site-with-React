import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry the page you are looking for is not found</h2>
      <Link to="/">Back to home Page</Link>
    </div>
  );
};
export default NotFound;
