import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import PickupRoute from "./routes/PickPokemon/PickPokemonRoute.tsx";
import ShowImage from "./components/ShowImage.tsx/ShowImage.tsx";
import PokemonInfoRoute from "./routes/PokemonInfoRoute/PokemonInfoRoute.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PickupRoute />,
  },
  {
    path: "/pokemonInfo",
    element: <PokemonInfoRoute />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ShowImage>
        <RouterProvider router={router} />
      </ShowImage>
    </Provider>
  </React.StrictMode>
);
