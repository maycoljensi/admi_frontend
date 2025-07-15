const RecentSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white p-4 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4">Órdenes recientes</h2>
        <ul className="text-sm text-gray-700 space-y-2">
          <li>Mr. Clark - Pedido #123456 - ✅</li>
          <li>Mr. Singh - Pedido #123457 - ⏳</li>
          <li>Ms. Elena - Pedido #123458 - ❌</li>
        </ul>
      </div>
      <div className="bg-white p-4 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4">Comentarios recientes</h2>
        <ul className="text-sm text-gray-700 space-y-2">
          <li><strong>Mark:</strong> Excelente trabajo.</li>
          <li><strong>Thomas:</strong> Se requiere revisión del pedido.</li>
        </ul>
      </div>
    </div>
  );
};

export default RecentSection;
