import axios from 'axios';
import { useQuery } from 'react-query';

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes');
};

// Other variation of the fetcher function
// const getSuperHeroesUsingAxios = async () => {
//   const res = await axios.get(
//     'http://localhost:4000/superheroes'
//   );
//   return res.data;
// };

// Other variation of the fetcher function
// const getSuperHeroesUsingFetch = async () => {
//   const res = await fetch(
//     'http://localhost:4000/superheroes'
//   );
//   return res.json();
// };

export const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error } = useQuery(
    'super-heroes',
    fetchSuperHeroes
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      {data &&
        data.data.map((hero) => {
          return <div key={hero.name}>{hero.name}</div>;
        })}
    </>
  );
};
