import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/shared/layout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <h1 className="p-4"> Inicio </h1>,
      },
      {
        path: "cursos",
        element: <h1 className="p-4"> Cursos </h1>,
      },
      {
        path: "contacto",
        element: <h1 className="p-4"> Contacto </h1>,
      },
      {
        path: "videos",
        element: <h1 className="p-4"> Videos </h1>,
      },
    ],
  },
]);

export default router;
