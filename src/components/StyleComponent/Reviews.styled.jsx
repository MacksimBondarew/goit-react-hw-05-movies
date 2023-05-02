import styled from 'styled-components';

export const ListReviews = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
export const ItemReviews = styled.li`
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
    list-style-type: none;
    text-align: center;
`;
export const Author = styled.h4`
    font-size: 20px;
    margin-bottom: 10px;
    color: #b22222;
`;

export const Content = styled.p`
    font-size: 18px;
    line-height: 1.5;
    font-weight: 500;
`;
export const Error = styled.h1`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    color: #ff4d4f;
    margin-top: 20px;
`;
