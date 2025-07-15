import { Calendar, Inbox, LayoutDashboard, Settings, User, LogOut } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-gradient-to-b from-indigo-700 to-blue-600 text-white flex flex-col p-4">
      <div className="flex flex-col items-center mb-10">
        <img
          src="https://i.pravatar.cc/100"
          alt="Avatar"
          className="rounded-full w-20 h-20 mb-2 border-4 border-white"
        />
        <h2 className="font-semibold text-lg">Andrew Bennet</h2>
      </div>

      <nav className="space-y-4 flex-1">
        <SidebarItem icon={<LayoutDashboard />} text="Dashboard" />
        <SidebarItem icon={<Calendar />} text="Calendar" />
        <SidebarItem icon={<Inbox />} text="Inbox" />
        <SidebarItem icon={<User />} text="Profile" />
        <SidebarItem icon={<Settings />} text="Settings" />
      </nav>

      <button className="flex items-center gap-2 text-red-300 hover:text-red-500 mt-auto">
        <LogOut className="w-5 h-5" />
        Logout
      </button>
    </aside>
  );
};

const SidebarItem = ({ icon, text }) => (
  <div className="flex items-center gap-3 px-4 py-2 hover:bg-indigo-800 rounded-lg cursor-pointer transition">
    {icon}
    <span>{text}</span>
  </div>
);

export default Sidebar;
