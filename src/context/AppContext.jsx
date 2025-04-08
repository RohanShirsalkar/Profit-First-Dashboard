import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  const values = { isSideBarOpen, toggleSideBar };
  return <AppContext.Provider value={values}> {children} </AppContext.Provider>;
};
