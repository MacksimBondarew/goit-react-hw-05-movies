import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
    ImgCredit,
    ItemCredit,
    ListCredits,
    NameCredit,
    Error
} from '../StyleComponent/Cast.styled';

export default function Cast() {
    const [credits, setCredits] = useState([]);
    const { movieId } = useParams();

    async function getInformationCredits(id) {
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/${id}/credits?api_key=3371eb177fbad0ff5df328740d3861be&language=en-US`
            );
            setCredits(response.data.cast);
        } catch (error) {
            console.log('Ти отримав помилку на акторах');
        }
    };
    
    useEffect(() => {
        getInformationCredits(movieId);
    }, [movieId]);
    return (
        <ListCredits>
            {credits < 1 && (
                <Error>We don`t have any reviews for this movie!</Error>
            )}
            {credits.map(credit => (
                <ItemCredit key={credit.id && credit.id}>
                    <ImgCredit
                        src={
                            credit.profile_path
                                ? `https://image.tmdb.org/t/p/original${credit.profile_path}`
                                : 'https://abrakadabra.fun/uploads/posts/2021-12/1640528661_1-abrakadabra-fun-p-serii-chelovek-na-avu-1.png'
                        }
                        alt=""
                    />
                    <NameCredit>{credit.name}</NameCredit>
                    <NameCredit>{credit.character}</NameCredit>
                </ItemCredit>
            ))}
        </ListCredits>
    );
}
