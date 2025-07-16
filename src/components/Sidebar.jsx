import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, ChevronDown } from 'lucide-react';

const Sidebar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  // Función para manejar el clic en "Convocatoria" y mostrar el dropdown
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <aside className="w-80 h-screen bg-gradient-to-b from-blue-600 to-indigo-600 text-white flex flex-col p-6 overflow-y-auto">
      <div className="flex justify-center mb-10">
        <h1 className="text-3xl font-bold">Expence</h1>
        <span className="text-sm mt-2 block">Manager</span>
      </div>

      <div className="flex flex-col items-center mb-10">
        <img
          src="https://i.pravatar.cc/100"
          alt="Avatar"
          className="rounded-full w-24 h-24 border-4 border-white mb-4"
        />
        <h2 className="font-semibold text-lg">Dylan Mike</h2>
        <p className="text-sm text-gray-200">Web Designer</p>
      </div>

      <nav className="space-y-4 flex-1">
        <SidebarItem icon={<FileText />} text="Inicio" to="/" />
        <div>
          <div
            className="flex items-center gap-4 px-4 py-2 hover:bg-blue-700 rounded-lg cursor-pointer transition"
            onClick={toggleDropdown}
          >
            <FileText />
            <span>Convocatoria</span>
            <ChevronDown className={`ml-auto ${showDropdown ? 'rotate-180' : ''}`} />
          </div>

          {showDropdown && (
            <div className="ml-8 mt-2 space-y-2">
              <Link
                to="/convocatorias/728"
                className="block px-4 py-2 hover:bg-blue-700 rounded-lg transition"
              >
                Convocatoria DS Nº728
              </Link>
              <Link
                to="/convocatorias/practicas"
                className="block px-4 py-2 hover:bg-blue-700 rounded-lg transition"
              >
                Prácticas
              </Link>
            </div>
          )}
        </div>

        <SidebarItem icon={<FileText />} text="Documentos" to="/documentos" />
        <SidebarItem icon={<FileText />} text="Perfil" to="/perfil" />
        <SidebarItem icon={<FileText />} text="Ajustes" to="/ajustes" />
      </nav>

      <div className="mt-auto">
        <button className="flex items-center gap-2 text-red-300 hover:text-red-500 mt-4">
          <ChevronDown className="w-5 h-5" />
          Cerrar sesión
        </button>
      </div>
    </aside>
  );
};

const SidebarItem = ({ icon, text, to }) => (
  <Link to={to} className="flex items-center gap-4 px-4 py-2 hover:bg-blue-700 rounded-lg cursor-pointer transition">
    {icon}
    <span>{text}</span>
  </Link>
);

export default Sidebar;
