import { PropTypes } from "@mui/material";
import { createContext, ReactNode, useContext, useState } from "react";

interface Props {
  children: ReactNode;
}

interface ContextCustome {
  theme: PropTypes.Color;
  toggleTheme: (theme: PropTypes.Color) => void;
}

const defaultValue = {
  theme: "primary" as PropTypes.Color,
  toggleTheme: () => {},
};

export const themeContext = createContext<ContextCustome>(defaultValue);

export const ThemeContextProvider = ({ children }: Props) => {
  //state
  const [theme, setTheme] = useState(defaultValue.theme);
  const toggleTheme = (theme1: PropTypes.Color) => {
    console.log(theme1);
    
    setTheme(theme1)
    // if (theme === "primary") 
    //   setTheme("secondary");
    // } else {
    //   setTheme("primary");
    // }
  };
  const themeDynamic = { theme, toggleTheme };
  return (
    <themeContext.Provider value={themeDynamic}>
      {children}
    </themeContext.Provider>
  );
};
