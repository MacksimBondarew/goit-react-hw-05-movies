import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    margin-left: auto;
    margin-right: auto;

    @media screen and (min-width: 320px) {
        width: 320px;
    }
    @media screen and (min-width: 768px) {
        width: 768px;
        padding-left: 20px;
        padding-right: 20px;
    }
    @media screen and (min-width: 1280px) {
        width: 1280px;
    }
    display: block;
    gap: 60px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    flex-wrap: wrap;
    @media screen and (min-width: 768px) {
        gap: 16px;
        flex-wrap: nowrap;
    }
    @media screen and (min-width: 768px) {
        gap: 29px;
        flex-wrap: nowrap;
    }

    &:last-child {
        padding-top: 20px;
    }
`;
export const Wrapper = styled.div`
    text-align: center;
`;
export const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 20px;
`;

export const MoviePoster = styled.img`
    width: 500px;
    height: auto;
`;

export const UserScore = styled.p`
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 20px;
`;

export const OverviewTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const OverviewText = styled.p`
    font-size: 1.2rem;
    line-height: 1.5;
    margin-bottom: 20px;
    text-align: center;
`;

export const GenreList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const GenreItem = styled.li`
    font-size: 1.2rem;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #eee;
`;

export const List = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
`;

export const ListItem = styled.li`
    list-style-type: none;
    &:last-child {
        margin-left: 20px;
    }
`;

export const NavLink = styled(Link)`
text-decoration: none;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0.02em;
    line-height: 1.14;
    padding: 20px 20px;
    background-color: #AFEEEE;
    border-radius: 50px;
    color: black;
    display: inline-block;
`;
