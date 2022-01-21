import BlogList from "./BlogList";
import useFetch from "./useFetch";
// import db from "../data/db.json";
// import axios from "axios";
const Home = () => {
  const { data, isPending, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <div className="home">
      {error && <div> {error}</div>}
      {isPending && <div>Loading...</div>}
      {data && <BlogList blogs={data} title="All Blogs: " />}

      {/* <button onClick={() => setName("Changed name here")}>
        Click to change name
      </button> */}
      {/* <p>{name}</p> */}
    </div>
  );
};
export default Home;
