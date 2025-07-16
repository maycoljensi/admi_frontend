const Inicio = () => {
  return (
    <div>
      {/* Título de Bienvenida */}
      <h2 className="text-3xl font-semibold text-gray-700 mb-4">Bienvenido al Panel de Administración</h2>
      <p className="text-lg text-gray-600 mb-6">
        Aquí puedes gestionar todas las funciones del sistema como administrador.
      </p>

      {/* Tarjetas resumen */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-sm text-gray-600">Usuarios Registrados</h3>
          <p className="text-2xl font-semibold text-indigo-600">1,243</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-sm text-gray-600">Órdenes Esta Semana</h3>
          <p className="text-2xl font-semibold text-green-600">320</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-sm text-gray-600">Ingresos Esta Semana</h3>
          <p className="text-2xl font-semibold text-pink-600">$12,000</p>
        </div>
      </div>

      {/* Estadísticas */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-6">
        <h3 className="text-xl font-semibold text-gray-700">Gráfico de Ventas</h3>
        <div className="h-48 bg-gray-200 rounded-md flex justify-center items-center text-gray-600">
          {/* Aquí puedes integrar un gráfico real con Recharts o Chart.js */}
          [Gráfico de Ventas Aquí]
        </div>
      </div>
    </div>
  );
};

export default Inicio;
