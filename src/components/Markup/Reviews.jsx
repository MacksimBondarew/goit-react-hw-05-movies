import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
    ItemReviews,
    ListReviews,
    Author,
    Content,
    Error,
} from '../StyleComponent/Reviews.styled';

export default function Reviews() {
    const [reviews, setRewiews] = useState([]);
    const { movieId } = useParams();

    async function getInformationRewiews(id) {
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=3371eb177fbad0ff5df328740d3861be&language=en-US`
            );
            setRewiews(response.data.results);
        } catch (error) {
            console.log('Ти отримав помилку на акторах');
        }
    }
    useEffect(() => {
        getInformationRewiews(movieId);
    }, [movieId]);
    return (
        <ListReviews>
            {reviews < 1 && (
                <Error>We don`t have any reviews for this movie!</Error>
            )}
            {reviews.map(review => (
                <ItemReviews key={review.id}>
                    <Author>{review.author}</Author>
                    <Content>{review.content}</Content>
                </ItemReviews>
            ))}
        </ListReviews>
    );
}
