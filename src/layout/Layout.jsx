import { Outlet } from "react-router-dom";
import Sidebar from "../components/shared/Sidebar";
import SearchBar from "../components/shared/SearchBar";

const Layout = () => {
  return (
    <div className="flex h-screen bg-black bg-[url('/images/background.png')]  text-white overflow-hidden">
      <Sidebar />
      <main className="flex-1">
        <div className="h-[100%] px-6 overflow-y-auto thin-scrollbar pb-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
