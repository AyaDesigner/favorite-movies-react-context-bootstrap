import React, { useContext } from 'react';
import MoviesContext from '../context/movies-context';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const FavoritesMovies = () => {

    const moviesContext = useContext(MoviesContext);
    const favoriteMovies = moviesContext.favoriteMovies;
    const setFavoriteMovies = moviesContext.setFavoriteMovies;

    const removeFromFavoriteMovies = (movie) => {
        setFavoriteMovies(favoriteMovies.filter(favMovie => favMovie.imdbID !== movie.imdbID));
    }

    return (
        <div>
            {favoriteMovies.map(movie => 
            <Card style={{ width: '13rem'}}>
                <Card.Img variant="top" src={movie.Poster} />
                    <Card.Body>
                        <Card.Title>{movie.Title}</Card.Title>
                        <Card.Text>
                            {movie.Year}
                        </Card.Text>
                            <Button
                                variant="primary"
                                onClick={() => removeFromFavoriteMovies(movie)}
                            >
                                Remove from favorites
                            </Button>
                    </Card.Body>
            </Card>)}
        </div>);
}

export default FavoritesMovies;