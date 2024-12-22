import { createContext } from "react";

export const Theme = createContext();

export const ThemeProvider = ({ children }) => {
  const theme = "#0D1117";

  return <Theme.Provider value={{ theme }}>{children}</Theme.Provider>;
};
