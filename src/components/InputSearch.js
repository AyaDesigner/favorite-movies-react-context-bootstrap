import React, {useState, useContext} from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';
import axios from 'axios';
import MoviesContext from '../context/movies-context';
import MoviesList from './MoviesList';


const InputSearch = () => {

    const moviesContext = useContext(MoviesContext);
    const moviesResult = moviesContext.moviesResult;
    const setMoviesResult = moviesContext.setMoviesResult;

    const [keywordInput, setKeyWordInput] = useState("");

    const searchMovies = async () => {
        try {
            const response = await axios.get(`http://www.omdbapi.com/?s=${keywordInput}&apikey=cbd0acd8`);
            setMoviesResult(response.data.Search);
            console.log(moviesResult);
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    };
    

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Figure>
                            <Figure.Image
                                width={700}
                                height={250}
                                alt="171x180"
                                src="https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2018/03/13153742/RT_300EssentialMovies_700X250.jpg"
                            />
                           
                        </Figure>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Search by keyword"
                                aria-describedby="basic-addon2"
                                onChange={event => setKeyWordInput(event.target.value)}

                            />
                            <InputGroup.Append>
                                <Button 
                                variant="outline-secondary"
                                onClick={searchMovies}
                                >
                                    Search
                                </Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>

            <MoviesList/>

        </div>);
}

export default InputSearch;