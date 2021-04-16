import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import InputSearch from './components/InputSearch';
import MoviesContext from './context/movies-context';



function App() {

  const [moviesResult, setMoviesResult] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  return (
    <div className="App">
      <MoviesContext.Provider value={{moviesResult, setMoviesResult, favoriteMovies, setFavoriteMovies}}>
          <InputSearch/>
      </MoviesContext.Provider>
    </div>
  );
}

export default App;
