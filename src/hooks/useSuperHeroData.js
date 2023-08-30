import axios from 'axios';
import { useQuery } from 'react-query'

const fetchSuperHero = ({ queryKey }) => {
    const id = queryKey[1];
    return axios.get(
        `http://localhost:4000/superheroes/${id}`
    );
};


export const useSuperHeroData = (id) => {
    return useQuery(
        ['super-hero', id],
        fetchSuperHero
    );
}
