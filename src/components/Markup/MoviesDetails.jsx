import { useParams, Outlet, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Suspense, useEffect, useRef, useState } from 'react';
import {
    Container,
    Title,
    MoviePoster,
    UserScore,
    OverviewTitle,
    OverviewText,
    GenreList,
    GenreItem,
    Wrapper,
    ListItem,
    List,
    NavLink,
    StyledLink,
} from '../StyleComponent/MoviesDetails.styled';
import { DotLoader } from 'react-spinners';

const MovieDetails = () => {
    const [allInformation, setAllInformation] = useState({});
    const { movieId } = useParams();
    const location = useLocation();
    const backLinkLocation = useRef(location.state?.from ?? '/');

    async function movieName(id) {
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/${id}?api_key=3371eb177fbad0ff5df328740d3861be&language=en-US`
            );
            setAllInformation(response.data);
        } catch (error) {
            console.log('Помилка при отримані повної інформації');
        }
    };

    useEffect(() => {
        movieName(movieId);
    }, [movieId]);

    const { title, poster_path, genres, overview, vote_average } =
        allInformation;
    return (
        <>
            <Container>
                <StyledLink to={backLinkLocation.current}>Go back</StyledLink>
            </Container>
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
                    <List>
                        <ListItem>
                            <NavLink to="cast">cast</NavLink>
                        </ListItem>
                        <ListItem>
                            <NavLink to="reviews">reviews</NavLink>
                        </ListItem>
                    </List>
                </Wrapper>
                <Wrapper></Wrapper>
            </Container>
            <Container>
                <Suspense fallback={
                    <DotLoader
                        style={{textAlign: 'center'}}
                        color="#3682d6"
                        cssOverride={{}}
                        loading
                        size={70}
                    />
                }>
                    <Outlet />
                </Suspense>
            </Container>
        </>
    );
};
export default MovieDetails;
