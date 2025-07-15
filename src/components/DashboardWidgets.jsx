const DashboardWidgets = () => {
  const data = [
    { title: 'Ganancias esta semana', value: '$1250', color: 'bg-indigo-500' },
    { title: 'Usuarios activos', value: '342', color: 'bg-green-500' },
    { title: 'Órdenes recientes', value: '45', color: 'bg-pink-500' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
      {data.map((item, i) => (
        <div key={i} className={`rounded-xl text-white p-6 shadow ${item.color}`}>
          <h3 className="text-sm">{item.title}</h3>
          <p className="text-2xl font-bold">{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardWidgets;
