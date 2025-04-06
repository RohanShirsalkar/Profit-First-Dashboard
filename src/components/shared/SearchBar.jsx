import { Bell, Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="w-full pb-4 flex items-center  border-b border-gray-400">
      <div className="flex items-center bg-transparent w-full px-2">
        <Search className="text-white mr-2" size={20} />
        <input
          type="text"
          placeholder="Search campaign, customers, etc..."
          className="bg-transparent text-white text-sm placeholder-white outline-none w-full py-1"
        />
      </div>
      <div className="border-x border-gray-400 px-4 py-3">
        <Bell className="text-green-400" size={18} />
      </div>
    </div>
  );
};

export default SearchBar;
