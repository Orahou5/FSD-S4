import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import ErrorPage from "../components/ErrorPage.jsx";
import { PokemonList } from "../components/PokemonList.jsx";
import { PokemonWrapper } from "../components/PokemonWrapper.jsx";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "pokemon",
      element: <PokemonList />,
    },
    {
      path: "pokemon/:name",
      element: <PokemonWrapper />,
    }
  ])
  
export default router;