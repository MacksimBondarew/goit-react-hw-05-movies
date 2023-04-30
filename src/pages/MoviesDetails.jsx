import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {
    Container,
    Title,
    MoviePoster,
    UserScore,
    OverviewTitle,
    OverviewText,
    GenreList,
    GenreItem,
    Wrapper
} from '../components/StyleComponent/MoviesDetails.styled';

const MovieDetails = () => {
    const [allInformation, setAllInformation] = useState({});
    const { movieId } = useParams();

    useEffect(() => {
        async function movieName(id) {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/${id}?api_key=3371eb177fbad0ff5df328740d3861be&language=en-US`
                );
                const responseMovie = await response.data;
                return responseMovie;
            } catch (error) {
                console.log('Помилка при отримані повної інформації');
            }
        }
        async function getInformation() {
            const getMovie = await movieName(movieId);
            setAllInformation(getMovie);
        }
        getInformation();
    }, [movieId]);

    const { title, poster_path, genres, overview, vote_average } =
        allInformation;
    return (
        <>
            <Container>
                <Wrapper>
                    <MoviePoster
                        src={
                            poster_path &&
                            `https://image.tmdb.org/t/p/w500/${poster_path}`
                        }
                        alt={title}
                    />
                </Wrapper>
                <Wrapper>
                    <Title>{title}</Title>
                    <UserScore>
                        User score: {vote_average && vote_average.toFixed(2)}%
                    </UserScore>
                    <OverviewTitle>overview</OverviewTitle>
                    <OverviewText>{overview}</OverviewText>
                    <GenreList>
                        {genres &&
                            genres.map(genre => (
                                <GenreItem key={genre.id}>
                                    {genre.name}
                                </GenreItem>
                            ))}
                    </GenreList>
                </Wrapper>
            </Container>
        </>
    );
};
export default MovieDetails;
