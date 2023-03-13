import React from "react";
import "./style/sb-admin-2.min.css";
import "./App.css";
// import Button from "@mui/material/Button";
import Navbar from "./components/Navbar";
import ProgressContextProvider from "./context/ProgressContext";
import { ThemeContextProvider } from "./context/ThemeContext";
import ThemeToggleBtn from "./components/ThemeToggleBtn";
import { MovieProvider } from "./context/MovieContext";
import Movies from "./components/Movies";
import Maintine from "./components/Maintine";
import { Notifications } from "@mantine/notifications";
import { Group, Button } from "@mantine/core";
import { handleNoti } from "./notifi/notifi";
import { AiFillAccountBook } from "react-icons/ai";
import { Check } from "tabler-icons-react";

function App() {
  return (
    <div className="App">
      <Notifications  position="bottom-right"></Notifications>
      {/* 
      <MovieProvider>
        <ThemeContextProvider>
          <ProgressContextProvider>
            <Navbar></Navbar>
            <Movies></Movies>
            <ThemeToggleBtn></ThemeToggleBtn>
          </ProgressContextProvider>
        </ThemeContextProvider>
      </MovieProvider> */}
      <Group>
        <Button
          variant="outline"
          onClick={() => handleNoti("title", "message", "warning", 2000)}
        >
          test
        </Button>
        <AiFillAccountBook></AiFillAccountBook>
      </Group>
      {/* <Maintine></Maintine> */}
    </div>
  );
}

export default App;
