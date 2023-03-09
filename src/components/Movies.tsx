import { Box, Button, Chip, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { movieContext } from "../context/MovieContext";
import { themeContext } from "../context/ThemeContext";

const Movies = () => {
  //state
  const [movie, setMovie] = useState("");
  //usecontext
  const { movies, addMovie, deleteMovie } = useContext(movieContext);
  const {theme,toggleTheme} = useContext(themeContext)

  const chipStyle = theme as 
  'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'


  const handleMovie = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => setMovie(e.target.value);
  return (
    <>
      <Box display="flex" justifyContent="center" my={5}>
        <TextField
          label="Your Favourite movie"
          variant="outlined"
          onChange={handleMovie}
          value={movie}
        >
          {" "}
        </TextField>
        <Button
          onClick={() => {
            addMovie(movie)
            setMovie("");
          }}
          variant="contained"
        >
          Add
        </Button>
      </Box>
      <Box display="flex" justifyContent="center" flexWrap="wrap">
        {movies?.map((a) => (
          <Chip
            key={a.id}
            label={a.title}
            clickable
            color={chipStyle}
            sx={{
              margin: "5px",
            }}
            onDelete={()=> deleteMovie(a.id)}
          ></Chip>
        ))}
      </Box>
    </>
  );
};
// React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
export default Movies;
