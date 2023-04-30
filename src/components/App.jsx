import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import Home from '../pages/Home';
import MovieDetails from '../pages/MoviesDetails';
export const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route
                        index
                        element={<Home />}
                    ></Route>
                    <Route
                        path="/movies"
                        element={<div>React homework movies</div>}
                    ></Route>
                    <Route path="/movies/:movieId" element={<MovieDetails />}>
                        {/* <Route path="/movies/movieId/cast"></Route>
                        <Route path="/movies/movieId/reviews"></Route> */}
                    </Route>
                </Route>
            </Routes>
        </div>
    );
};
