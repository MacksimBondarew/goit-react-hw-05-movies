import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function getMovies() {
            try {
                const response = await axios.get(
                    'https://api.themoviedb.org/3/trending/movie/day?api_key=3371eb177fbad0ff5df328740d3861be'
                );
                setMovies(response.data.results);  
            } catch (error) {
                console.log("помилка на отримані трендів");
            }
        }
        getMovies();
    }, [movies]);
    return (
        <>
            <h1>Trending today</h1>
            <ul>
                {movies.map(movie => {
                    return(
                    <li key={movie.id}>
                        <Link to={`movies/${movie.id}`}>{movie.title}</Link>
                    </li>);
                })}
            </ul>
        </>
    );
};

export default Home;
