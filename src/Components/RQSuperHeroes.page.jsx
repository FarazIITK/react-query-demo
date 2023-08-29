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
  const { isLoading, isFetching, data, isError, error } = useQuery(
    "super-heroes",
    fetchSuperHeroes,
    {
      cacheTime: 5 * 1000,
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
      {isFetching && <h3>Fetching in background</h3>}
      {data &&
        data.data.map((hero) => {
          return <div key={hero.name}>{hero.name}</div>;
        })}
    </>
  );
};
