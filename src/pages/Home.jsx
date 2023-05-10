import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Container } from 'components/StyleComponent/MoviesDetails.styled';
import {
    MovieList,
    MovieItem,
    MovieLink,
    ImgPages,
    Title,
} from '../components/StyleComponent/Pages.styled';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const location = useLocation();
    
    async function getMovies() {
        try {
            const response = await axios.get(
                'https://api.themoviedb.org/3/trending/movie/day?api_key=3371eb177fbad0ff5df328740d3861be'
            );
            setMovies(response.data.results);
        } catch (error) {
            console.log('помилка на отримані трендів');
        }
    };

    useEffect(() => {
        getMovies();
    }, []);
    return (
        <>
            <Title>Trending today</Title>
            <Container>
                <MovieList>
                    {movies.map(movie => {
                        return (
                            <MovieItem key={movie.id}>
                                <Link
                                    to={`movies/${movie.id}`}
                                    state={{ from: location }}
                                    style={{ textDecoration: 'none' }}
                                >
                                    <MovieLink>{movie.title}</MovieLink>
                                    <ImgPages
                                        src={
                                            movie.poster_path
                                                ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                                                : 'https://abrakadabra.fun/uploads/posts/2021-12/1640528661_1-abrakadabra-fun-p-serii-chelovek-na-avu-1.png'
                                        }
                                        alt=""
                                    />
                                </Link>
                            </MovieItem>
                        );
                    })}
                </MovieList>
            </Container>
        </>
    );
};

export default Home;
