import axios from 'axios';
// import { useState } from 'react';
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
  // const [isPolling, setIsPolling] = useState(true);
  // const onSuccess = (data) => {
  //   if (data.data.length === 4) {
  //     setIsPolling(false);
  //   }
  // };
  const { isLoading, data, isError, error } = useQuery(
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
    }
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
