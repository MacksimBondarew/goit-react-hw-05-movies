import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from './SharedLayout/SharedLayout';
const Home = lazy(() => import('../pages/Home'));
const MovieDetails = lazy(() => import('./Markup/MoviesDetails'));
const Cast = lazy(() => import( './Markup/Cast'));
const Reviews = lazy(() => import('./Markup/Reviews'));
const Movies = lazy(() => import('../pages/Movies'));


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
