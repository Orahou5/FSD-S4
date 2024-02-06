import { Link, useNavigate } from "react-router-dom";
import users from "../js/users.js";
import Layout from "./Layout.jsx";

export function UserList() {
    return (
      <Layout>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link to={`/user/${user.id}`}>Utilisateur {user.id} : {user.name}</Link>
            </li>
          ))}
        </ul>
      </Layout>
      
    )
}