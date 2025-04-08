import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Sidebar from "./Sidebar";

const SideBarContainer = () => {
  const { isSideBarOpen } = useContext(AppContext);

  if (isSideBarOpen) {
    return <Sidebar />;
  }
};

export default SideBarContainer;
