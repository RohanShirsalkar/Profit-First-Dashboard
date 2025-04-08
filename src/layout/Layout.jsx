import { Outlet } from "react-router-dom";
import { AppContextProvider } from "../context/AppContext";
import SideBarContainer from "../components/shared/SideBarContainer";

const Layout = () => {
  return (
    <AppContextProvider>
      <div className="flex h-screen bg-black bg-[url('/images/background.png')] text-white lg:overflow-hidden">
        <SideBarContainer />
        <main className="flex-1">
          <div className="h-[100%] px-6 overflow-y-auto thin-scrollbar pb-4">
            <Outlet />
          </div>
        </main>
      </div>
    </AppContextProvider>
  );
};

export default Layout;
