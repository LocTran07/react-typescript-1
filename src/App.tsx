import React from "react";
import "./style/sb-admin-2.min.css";
import "./App.css";
import Button from "@mui/material/Button";
import Navbar from "./components/Navbar";
import ProgressContextProvider from "./context/ProgressContext";
import { ThemeContextProvider } from "./context/ThemeContext";
import ThemeToggleBtn from "./components/ThemeToggleBtn";
import { MovieProvider } from "./context/MovieContext";
import Movies from "./components/Movies";

function App() {
  return (
    <div className="App">
      <MovieProvider>
        <ThemeContextProvider>
          <ProgressContextProvider>
            <Navbar></Navbar>
            <Movies></Movies>
            <ThemeToggleBtn></ThemeToggleBtn>
          </ProgressContextProvider>
        </ThemeContextProvider>
      </MovieProvider>
    </div>
  );
}

export default App;
