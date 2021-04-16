import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import FavoritesMovies from './FavoriteMovies';
import MoviesContext from '../context/movies-context';


const MoviesList = () => {

    const moviesContext = useContext(MoviesContext);
    const favoriteMovies = moviesContext.favoriteMovies;
    const setFavoriteMovies = moviesContext.setFavoriteMovies;
    const moviesResult = moviesContext.moviesResult;




    const addToFavoriteMovies = (movie) => {
        setFavoriteMovies([...favoriteMovies, movie]);
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col sm={10}>
                        {moviesResult.map(movie => <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={movie.Poster} />
                            <Card.Body>
                                <Card.Title>{movie.Title}</Card.Title>
                                <Card.Text>
                                    {movie.Year}
                                </Card.Text>
                                <Button
                                    variant="primary"
                                    onClick={() => addToFavoriteMovies(movie)}
                                >
                                    Add to favorite
                                            </Button>
                            </Card.Body>
                        </Card>)}
                    </Col>

                    <Col sm={2}>
                        <FavoritesMovies />
                    </Col>
                </Row>

            </Container>
        </div>);
}

export default MoviesList;