import { createContext, ReactNode, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const defaultValue = {
  movies: [],
  addMovie: () => {},
  deleteMovie: () => {},
};

interface Children {
  children: ReactNode;
}

interface Movie {
  id: string;
  title: string;
}

interface MovieDefaultContext {
  movies: Movie[];
  addMovie: (title: string) => void;
  deleteMovie: (id: string) => void;
}
export const movieContext = createContext<MovieDefaultContext>(defaultValue);

export const MovieProvider = ({ children }: Children) => {
  const [movies, setMovie] = useState<Movie[]>(defaultValue.movies);
  const addMovie = (title: string) =>
    setMovie([...movies, { id: uuidv4(), title }]);
  const deleteMovie = (id:string) => setMovie(movies.filter(a => a.id !== id))
  const dynamicMovie = {movies,addMovie,deleteMovie}
  return (
    <movieContext.Provider value={dynamicMovie}>
      {children}
    </movieContext.Provider>
  );
};
