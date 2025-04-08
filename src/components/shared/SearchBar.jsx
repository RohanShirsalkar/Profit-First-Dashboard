import { Bell, Search, AlignJustify } from "lucide-react";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const SearchBar = () => {
  const { toggleSideBar } = useContext(AppContext);
  return (
    <div className="w-full pb-4 flex items-center  border-b border-gray-400">
      <div className="flex items-center bg-transparent w-full lg:px-2">
        <button onClick={toggleSideBar} className="me-2 lg:hidden">
          <AlignJustify />
        </button>
        <img src="/icons/search.svg" alt="search" className="w-4 me-3" />
        <input
          type="text"
          placeholder="Search campaign, customers, etc..."
          className="bg-transparent text-white text-sm lg:placeholder-white outline-none w-full py-1"
        />
      </div>
      <div className="border-x border-gray-400 px-4 py-3">
        <img src="/icons/bell.svg" alt="search" className="w-4 " />
      </div>
    </div>
  );
};

export default SearchBar;
