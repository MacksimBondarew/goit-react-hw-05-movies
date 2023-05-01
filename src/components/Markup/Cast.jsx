import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ImgCredit, ItemCredit, ListCredits, NameCredit} from '../StyleComponent/Cast.styled'

export default function Cast() {
    const [credits, setCredits] = useState([]);
    const { movieId } = useParams();
    useEffect(() => {
        async function getInformationCredits(id) {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=3371eb177fbad0ff5df328740d3861be&language=en-US`
                );
                return response.data.cast;
            } catch (error) {
                console.log('Ти отримав помилку на акторах');
            }
        }
        async function informationCredits() {
            const getCredig = await getInformationCredits(movieId);
            setCredits(getCredig);
        }
        informationCredits();
    }, [movieId]);
    return <ListCredits>
            {credits.map(credit => (
                <ItemCredit key={credit.id && credit.id}>
                    <ImgCredit
                        src={
                            credit.profile_path &&
                            `https://image.tmdb.org/t/p/original${credit.profile_path}`
                        }
                        alt=''
                    />
                    <NameCredit >{credit.name}</NameCredit>
                </ItemCredit>
            ))}
        </ListCredits>;
}
