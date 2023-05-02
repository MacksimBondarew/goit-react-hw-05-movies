import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    background-color: #2c3e50;
    color: white;
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: 1rem;

    a {
        font-size: 1.2rem;
        text-decoration: none;
        color: inherit;
        opacity: 0.8;
        transition: opacity 0.2s ease-in-out;

        &:hover {
            opacity: 1;
        }

        &.active {
            font-weight: bold;
            opacity: 1;
        }
    }
`;
