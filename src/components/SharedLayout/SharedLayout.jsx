import { NavLink, Outlet } from 'react-router-dom';
import { Header, Nav } from '../StyleComponent/SharedLayout.styled';

export const SharedLayout = () => {
    return (
        <>
            <Header>
                <Nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/movies">Movies</NavLink>
                </Nav>
            </Header>
            <Outlet />
        </>
    );
};
