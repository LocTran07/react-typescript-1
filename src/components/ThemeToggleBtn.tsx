import { Button, createStyles, Fab, makeStyles, Theme } from "@mui/material";
import React, { useContext } from "react";
import { themeContext, ThemeContextProvider } from "../context/ThemeContext";



const ThemeToggleBtn = () => {
  //context
  const {theme,toggleTheme} = useContext(themeContext)

  return (
 
    <Fab
      color={theme}
      variant="extended"
      sx={{
        position: "fixed",
        bottom: "3rem",
        right: "3rem",
      }}
     onClick={()=> toggleTheme(theme === 'primary' ? 'secondary' : 'primary')}
    >
      Toggle theme
    </Fab>
  );
};

export default ThemeToggleBtn;
