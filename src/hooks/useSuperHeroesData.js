import axios from 'axios';
import { useQuery } from 'react-query'

const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4000/superheroes');
};

export const useSuperHeroesData = () => {
    return useQuery(
        'super-heroes',
        fetchSuperHeroes,
        {
            // cacheTime: 60 * 1000,
            // staleTime: 10 * 1000,
            // retry: 2,
            // refetchInterval: isPolling ? 2000 : false,
            // refetchIntervalInBackground: false,
            // refetchOnMount: false,
            // refetchOnWindowFocus: true,
            // enabled: true,
            // onSuccess
            select: (data) => {
                return data.data.map((superhero) => {
                    return {
                        ...superhero,
                        name: superhero.name.toUpperCase()
                    };
                });
            }
        }
    );
}
