import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
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
  const { isLoading, isFetching, data, isError, error, refetch } = useQuery(
    "super-heroes",
    fetchSuperHeroes,
    {
      // cacheTime: 60 * 1000,
      staleTime: 10 * 1000,
      // retry: 2,
      // refetchInterval: 5000,
      // refetchIntervalInBackground: false,
      // refetchOnMount: false,
      // refetchOnWindowFocus: true,
      enabled: false,
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
      <button onClick={() => refetch()}>Fetch Superheroes</button>
      {isFetching && <h3>Fetching in background</h3>}
      {data &&
        data.data.map((hero) => {
          return <div key={hero.name}>{hero.name}</div>;
        })}
    </>
  );
};
