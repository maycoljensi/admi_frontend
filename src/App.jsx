import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Panel from './pages/Panel';
import { useState, useEffect } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Verificación de autenticación al cargar la aplicación
  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      setIsAuthenticated(true); // El usuario está autenticado si existe el token
    }
  }, []);

  // Función para manejar la autenticación
  const handleAuthentication = (status) => {
    setIsAuthenticated(status);
    if (status) {
      localStorage.setItem('auth_token', 'token_de_usuario'); // Guardamos el token en localStorage
    } else {
      localStorage.removeItem('auth_token'); // Eliminar el token si el usuario se desconecta
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Si no está autenticado, muestra el Login */}
        <Route path="/" element={<Login handleAuthentication={handleAuthentication} />} />

        {/* Si está autenticado, muestra el Panel */}
        {isAuthenticated && <Route path="/panel" element={<Panel />} />}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
