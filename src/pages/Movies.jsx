import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { Container } from 'components/StyleComponent/MoviesDetails.styled';
import {
    MovieList,
    MovieItem,
    MovieLink,
    ImgPages,
    Form,
} from '../components/StyleComponent/Pages.styled';

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const movieName = searchParams.get('movieName') ?? '';
    const location = useLocation();
    
    async function getQuery(query) {
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/search/movie?api_key=3371eb177fbad0ff5df328740d3861be&language=en-US&query=${query}`
            );
            setMovies(response.data.results);
        } catch (error) {
            console.log('Помилка на пошуку');
        }
    };

    useEffect(() => {
        getQuery(movieName);
    }, [movieName]);

    useEffect(() => {
        setSearch(movieName);
    }, [movieName]);
    const handleChange = evt => {
        setSearch(evt.target.value);
    };

    const updateQuery = evt => {
        evt.preventDefault();
        if (search === '') {
            return setSearchParams({});
        }
        setSearchParams({ movieName: search });
    };

    return (
        <>
            <Form onSubmit={updateQuery}>
                <input type="text" value={search} onChange={handleChange} />
                <button type="submit">search</button>
            </Form>
            <Container>
                <MovieList>
                    {movies.map(movie => {
                        return (
                            <MovieItem key={movie.id}>
                                <Link
                                    state={{ from: location }}
                                    to={`${movie.id}`}
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
}
