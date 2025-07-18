import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ← importar navegador

const Login = ({ handleAuthentication }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');
  const navigate = useNavigate(); // ← instancia para redireccionar

  const handleLogin = async (e) => {
    e.preventDefault();
    setMensaje('');

    try {
      const response = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMensaje(`Bienvenido, ${data.admin.nombre}`);
        // Llamamos la función handleAuthentication para marcar la autenticación como exitosa
        handleAuthentication(true);
        // Redirige al panel luego de 1 segundo
        setTimeout(() => {
          navigate('/panel');
        }, 10);
      } else {
        setMensaje(data.message || 'Error');
      }
    } catch (error) {
      console.error('Error al hacer login:', error);
      setMensaje('Error de conexión con el servidor');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-700">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Login de Administrador</h2>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded">
          Iniciar sesión
        </button>
        {mensaje && <p className="mt-4 text-center text-sm text-red-600">{mensaje}</p>}
      </form>
    </div>
  );
};

export default Login;
