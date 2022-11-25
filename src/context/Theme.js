import React, { createContext, useEffect, useState, useContext } from "react";

const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [_, setDisplay] = useState(null);
  const [isToggled, setIsToggled] = useState(null);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setIsToggled(true);
      window.__setPreferredTheme("dark");
    } else {
      setTheme("light");
      window.__setPreferredTheme("light");
      setIsToggled(false);
    }
  };

  useEffect(() => {
    setTheme(window.__theme);
    setDisplay(window.__display);

    window.__onThemeChange = () => setTheme(window.__theme);
    window.__onDisplayChange = () => setDisplay(window.__display);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isToggled }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => {
  const context = useContext(ThemeContext);

  return context;
};

export { ThemeProvider, useThemeContext };
