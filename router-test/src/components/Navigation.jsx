import { Link, useNavigate } from "react-router-dom";

export function Navigation() {
    const navigate = useNavigate();
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <>
            <button onClick={() => navigate(-1)}>Go Back</button>
            <button onClick={() => navigate(1)}>Go Forward</button>
        </>
      </ul>
    </nav>
  );
}