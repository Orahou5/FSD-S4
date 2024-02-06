import { useParams } from "react-router-dom";
import users from "../js/users.js";
import Layout from "./Layout.jsx";
import { UserList } from "./UserList.jsx";

export function UserProfile() {
    const { userId } = useParams();

    const user = users.find((user) => user.id === parseInt(userId));

    return (
        <Layout>
            {user === undefined ? (
                <div>Utilisateur {userId} non trouvé</div>
            ) : (
                <div>
                    <h2>Profil de l'utilisateur {userId}</h2>
                    <p>Nom : {user.name}</p>
                    <p>Addresse : {user.address}</p>
                </div>
            )}
        </Layout>
    );
}