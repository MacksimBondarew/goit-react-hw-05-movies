import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import Home from '../pages/Home';
import MovieDetails from './Markup/MoviesDetails';
import Cast from './Markup/Cast';
import Reviews from './Markup/Reviews';
import Movies from 'pages/Movies';

export const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<Home />}></Route>
                    <Route path="/movies" element={<Movies />}></Route>
                    <Route path="/movies/:movieId" element={<MovieDetails />}>
                        <Route path="cast" element={<Cast />}></Route>
                        <Route path="reviews" element={<Reviews />}></Route>
                    </Route>
                </Route>
            </Routes>
        </>
    );
};
