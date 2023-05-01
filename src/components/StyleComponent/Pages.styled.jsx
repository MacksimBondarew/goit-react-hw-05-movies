import styled from "styled-components";


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