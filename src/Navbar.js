import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>My Blog</h1>
      <div>
        <Link to="/">Home</Link>
        <Link
          to="/create"
          style={{
            color: "#fff",
            backgroundColor: "#f1356d",
            borderRadius: "5px"
          }}
        >
          New Blog
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
