import { NavLink, Outlet } from 'react-router-dom';
import { Header, Nav } from '../StyleComponent/SharedLayout.styled';
import { Suspense } from 'react';
import { DotLoader } from 'react-spinners';

const SharedLayout = () => {
    return (
        <>
            <Header>
                <Nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/movies">Movies</NavLink>
                </Nav>
            </Header>
            <Suspense
                fallback={
                    <DotLoader
                        style={{ position: 'fixed', top: "50%", left: "50%",  zIndex: "999" }}
                        color="#3682d6"
                        cssOverride={{}}
                        loading
                        size={70}
                    />
                }
            >
                <Outlet />
            </Suspense>
        </>
    );
};

export default SharedLayout;
