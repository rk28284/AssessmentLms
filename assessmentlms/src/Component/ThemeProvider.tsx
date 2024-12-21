import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isthemeDark, setisthemeDark] = useState(false);

  const handleToggle = () => {
    setisthemeDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isthemeDark, handleToggle }}>
      <div className={isthemeDark ? "light" : "dark"}>{children}</div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
export default ThemeProvider;
