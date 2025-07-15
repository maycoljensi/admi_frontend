import Sidebar from '../components/Sidebar';
import DashboardWidgets from '../components/DashboardWidgets';
import ChartSection from '../components/ChartSection';
import RecentSection from '../components/RecentSection';

const Panel = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
        <h1 className="text-2xl font-bold text-gray-700 mb-6">Dashboard</h1>
        <DashboardWidgets />
        <ChartSection />
        <RecentSection />
      </main>
    </div>
  );
};

export default Panel;
