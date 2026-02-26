import { Search, User } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full border-b bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo de marca */}
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold">
              Rico Programar
            </a>
          </div>

          {/* Links de navegación */}
          <ul className="hidden md:flex items-center gap-6">
            <li>
              <Link to="/" className="hover:text-primary transition">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/cursos" className="hover:text-primary transition">
                Cursos
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="hover:text-primary transition">
                Contacto
              </Link>
            </li>
            <li>
              <Link to="/videos" className="hover:text-primary transition">
                Video
              </Link>
            </li>
          </ul>

          {/* Sección derecha: búsqueda + usuario */}
          <div className="flex items-center gap-4">
            {/* Buscador */}
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-500" />

              <input
                type="text"
                placeholder="Buscar..."
                className="pl-9 pr-4
                 py-2.5 border rounded-lg text-body focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Icono de usuario */}
            <button className="flex items-center justify-center size-10 rounded-full border hover:bg-gray-100 transition">
              <User className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
