import styled from 'styled-components';

export const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;
`;

export const MovieList = styled.ul`
    display: block;
    gap: 20px;
    display: flex;
    justify-content: center;
    margin: -0px;
    flex-wrap: wrap;
`;

export const MovieItem = styled.li`
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 10px;
    list-style-type: none;
    text-align: center;
    flex-basis: calc((100% - 3 * 1px) / 3);
`;

export const MovieLink = styled.p`
    color: #333;
    margin-bottom: 10px;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    display: block;
    &:hover {
        color: #0077ff;
    }
`;
export const ImgPages = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 24px;
    display: inline-block;
`;

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 30px;

    input[type='text'] {
        font-size: 1rem;
        padding: 0.5rem;
        border: 1px solid gray;
        border-radius: 0.25rem;
        margin-right: 0.5rem;
        width: 60%;
        max-width: 400px;

        &:focus {
            outline: none;
            border-color: #61dafb;
            box-shadow: 0 0 0 2px #61dafb20;
        }
    }

    button[type='submit'] {
        font-size: 1rem;
        padding: 0.5rem;
        border: 1px solid gray;
        border-radius: 0.25rem;
        background-color: #61dafb;
        color: white;
        cursor: pointer;

        &:hover {
            background-color: #48c6e9;
        }
    }
`;
export const Title = styled.h1`
    font-size: 3rem;
    font-weight: bold;
    color: balck;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    text-align: center;
    margin-top: 2rem;
`;
