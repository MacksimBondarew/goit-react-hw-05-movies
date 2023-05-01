import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Container } from 'components/StyleComponent/MoviesDetails.styled';
import {
    MovieList,
    MovieItem,
    MovieLink,
    ImgPages,
} from '../components/StyleComponent/Pages.styled';

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const movieName = searchParams.get('movieName') ?? '';
    useEffect(() => {
        async function getQuery(query) {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/search/movie?api_key=3371eb177fbad0ff5df328740d3861be&language=en-US&query=${query}`
                );
                setMovies(response.data.results);
            } catch (error) {
                console.log('Помилка на пошуку');
            }
        }
        getQuery(movieName)
    }, [movieName]);
    const updateQuery = evt => {
        const movieNameValue = evt.target.value;
        if (movieNameValue === '') {
            return setSearchParams({});
        }
        setSearchParams({ movieName: movieNameValue });
    };

    return (
        <>
            <input
                type="text"
                value={movieName}
                onChange={updateQuery}
            />
            <Container>
                <MovieList>
                    {movies.map(movie => {
                        return (
                            <MovieItem key={movie.id}>
                                <Link
                                    to={`movies/${movie.id}`}
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
