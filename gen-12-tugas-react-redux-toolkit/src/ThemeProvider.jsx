import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [color, setColor] = useState(localStorage.getItem("theme") === "true");

  const changeTheme = () => {
    setColor(!color);
  };

  const shareValue = {
    color,
    setColor,
    changeTheme,
  };

  useEffect(() => {
    localStorage.setItem("theme", color);
  }, [color]);

  return <ThemeContext.Provider value={shareValue}>{children}</ThemeContext.Provider>;
}
