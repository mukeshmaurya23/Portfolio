import { createContext, useContext, useEffect, useState } from "react";

const initalValue = {
  themeMode: "dark",
  toggleTheme: () => {},
};

const ThemeContext = createContext(initalValue);

export const ThemeContextProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState("dark");

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    const query = document.querySelector("html");
    query.classList.remove("dark", "light");

    query.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
