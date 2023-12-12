import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import SignUpPage from "./components/pages/SingUpPage.jsx";
import ErrorPage from "./components/pages/ErrorPage.jsx";
import HomePage from "./components/pages/HomePage.jsx";
import SearchPage from "./components/pages/SearchPage.jsx";
import ProtectedRoute from "./utils/ProtestedRoute.jsx";
import LoggedRoute from "./utils/LoggetRoute.jsx";
import Playlist from "./components/pages/PlayList.jsx";
import LoginPage from "./components/pages/LoginPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/search/:query",
        element: <SearchPage />,
      },
      {
        path: "/create-playlist",
        element: (
          <LoggedRoute>
            <h1>TODO</h1>
          </LoggedRoute>
        ),
      },
      {
        path: "/liked-songs",
        element: (
          <LoggedRoute>
            <h1>TODO</h1>
          </LoggedRoute>
        ),
      },
      {
        path: "/library",
        element: (
          <LoggedRoute>
            <h1>TODO</h1>
          </LoggedRoute>
        ),
      },
      {
        path: "/playlist/:id",
        element: <Playlist />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <ProtectedRoute>
        <LoginPage/>
      </ProtectedRoute>
    ),
  },
  {
    path: "/signup",
    element: (
      <ProtectedRoute>
        <SignUpPage />
      </ProtectedRoute>
    ),
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
);
