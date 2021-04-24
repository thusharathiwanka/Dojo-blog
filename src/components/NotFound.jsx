import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Oops !!!</h1>
      <p>Requested page cannot be found</p>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
