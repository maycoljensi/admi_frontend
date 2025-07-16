const Convocatoria728 = ({ convocatorias }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold text-gray-700 mb-4">Convocatoria DS Nº728</h2>

      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600">Cantidad de Registros: {convocatorias.length}</p>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 flex items-center">
          Agregar Convocatoria
        </button>
      </div>

      {/* Tabla de Convocatorias */}
      <table className="min-w-full bg-gray-100 border border-gray-300 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="py-3 px-6 text-left">Nombre</th>
            <th className="py-3 px-6 text-left">Fecha</th>
            <th className="py-3 px-6 text-left">Estado</th>
            <th className="py-3 px-6 text-left">Bases</th>
            <th className="py-3 px-6 text-left">Curricular</th>
            <th className="py-3 px-6 text-left">Entrevista</th>
            <th className="py-3 px-6 text-center">Operaciones</th>
          </tr>
        </thead>
        <tbody>
          {convocatorias.map((registro, index) => (
            <tr key={index} className="hover:bg-gray-200">
              <td className="py-3 px-6">{registro.nombre}</td>
              <td className="py-3 px-6">{registro.fecha}</td>
              <td className="py-3 px-6 text-red-600">{registro.estado}</td>
              <td className="py-3 px-6">{registro.archivoBases || "Sin archivo"}</td>
              <td className="py-3 px-6">{registro.archivoCurricular || "Sin archivo"}</td>
              <td className="py-3 px-6">{registro.archivoEntrevista || "Sin archivo"}</td>
              <td className="py-3 px-6 text-center">
                <button className="text-green-600 hover:text-green-800 mr-2">Habilitar</button>
                <button className="text-yellow-500 hover:text-yellow-700 mr-2">Editar</button>
                <button className="text-red-600 hover:text-red-800">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Convocatoria728;
