import { createContext, useContext, useState } from "react";

const ThemeContext = createContext("white");

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("white");

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: () => setTheme(theme === "white" ? "black" : "white"),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);