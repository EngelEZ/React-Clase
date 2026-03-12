import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/shared/layout/MainLayout";
import ProfilePage from "@/features/users/pages/ProfilePage";
import HomePage from "@/features/home/page/homepage";
import AuthLayout from "@/shared/layout/AuthLayout";
import ConfigUserPage from "@/features/users/pages/ConfigUserPage";
import ListUserPage from "@/features/users/pages/ListUserPage";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "usuario",
        element: <ConfigUserPage />,
      },
      {
        path: "contacto",
        element: <h1 className="p-4"> Contacto </h1>,
      },
      {
        path: "videos",
        element: <h1 className="p-4"> Videos </h1>,
      },
      {
        path: "/users/:id/edit",
        element: <ProfilePage />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <ListUserPage />,
      },
      {
        path: "forgot-password",
        element: <h1 className="p-4"> Recuperar mi contraseña </h1>,
      },
      {
        path: "reset-password",
        element: <h1 className="p-4"> Resetear contrasera </h1>,
      },
    ],
  },
]);

export default router;
