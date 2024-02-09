import { Link, useNavigate } from "react-router-dom";

export function Navigation() {
  const navigate = useNavigate();
  return (
    <nav>
      <ul className="no-bullet">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pokemon">Pokemon List</Link>
        </li>
        {/* <>
            <button onClick={() => navigate(-1)}>Go Back</button>
            <button onClick={() => navigate(1)}>Go Forward</button>
        </> */}
      </ul>
    </nav>
  );
}