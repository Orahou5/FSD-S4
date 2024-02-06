import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Contact } from "../components/Contact.jsx";
import { UserProfile } from "../components/UserProfile.jsx";
import { UserList } from "../components/UserList.jsx";
import ErrorPage from "../error-page.jsx";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/contact",
      element: <Contact />
    },
    {
      path: "/users",
      element: <UserList />
    },
    {
      path: "/user/:userId",
      element: <UserProfile />
    }
  ])
  
export default router;