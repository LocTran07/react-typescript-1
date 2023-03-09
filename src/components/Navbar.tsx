import {
  AppBar,
  Box,
  Button,
  Chip,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import Welcome from "./Welcome";
import { createStyles, Theme, makeStyles } from "@mui/material";
import { context } from "../context/ProgressContext";
import { themeContext } from "../context/ThemeContext";

const Navbar = () => {
  // usestate
  const [position, setPosition] = useState<string>("full-stack");
  const [time, setTime] = useState<Date>(() => new Date(Date.now()));

  //context 
  const {lastTime,status} = useContext(context)
  const {theme} = useContext(themeContext)
  console.log(theme);
  
  //useEffect
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date(Date.now()));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);


  const handlePosition = (e: SelectChangeEvent<string>) => {
    setPosition(e.target.value);
    console.log(e.target.value);
  };

  return (
    <AppBar position="static" color={theme}>
      <Toolbar>
        {/* sx={{ display: 'flex', justifyContent: 'space-bewteen' } */}
        <Box
          className="asd"
          component="div"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={1}
          py={2}
        >
          <Typography variant="h6">My movie</Typography>
          <Box display="flex" justifyContent="space-between" flexDirection='column' alignItems="center" textAlign="center">
            <Welcome position={position}></Welcome>
            <Chip label={`Lastest working on this project: ${lastTime} - Status: ${status}`}></Chip>
            <Box  >
              <FormControl>
                <Select value={position} onChange={handlePosition}>
                  <MenuItem value="Full-stack">Full-stack</MenuItem>
                  <MenuItem value="Font-end">Font-end</MenuItem>
                  <MenuItem value="Back-end">Back-end</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box textAlign="center">
            <Box my={1}>
              <Typography variant="h6">{time.toUTCString()}</Typography>
              <Button  className="" variant="contained"> Login </Button>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
