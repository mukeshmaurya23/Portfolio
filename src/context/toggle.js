import { createContext, useContext, useState } from "react";

const initalValue = {
  toggle: false,
  toggleMenuHandler: () => {},
};

const ToggleContext = createContext(initalValue);

export const ToggleContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  const toggleMenuHandler = () => {
    setToggle(!toggle);
  };

  return (
    <ToggleContext.Provider value={{ toggle, toggleMenuHandler }}>
      {children}
    </ToggleContext.Provider>
  );
};

export const useToggle = () => useContext(ToggleContext);
