const ChartSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <div className="bg-white p-4 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4">Gráfico de Ventas</h2>
        <div className="h-48 bg-gray-100 rounded-md flex items-center justify-center">
          {/* Aquí podrías usar una librería como recharts */}
          <p className="text-gray-500">[Gráfico aquí]</p>
        </div>
      </div>
      <div className="bg-white p-4 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4">Calendario</h2>
        <div className="h-48 bg-gray-100 rounded-md flex items-center justify-center">
          <p className="text-gray-500">[Calendario aquí]</p>
        </div>
      </div>
    </div>
  );
};

export default ChartSection;
