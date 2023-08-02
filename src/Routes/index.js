import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../components/Layout/HomeLayout";
import ProfileLayout from "../components/Layout/ProfileLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

export const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/home", element: <HomeLayout /> },
  { path: "/profile", element: <ProfileLayout /> },
]);
