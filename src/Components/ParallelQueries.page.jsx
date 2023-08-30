import axios from 'axios';
import { useQuery } from 'react-query';

const fetchSuperHeroes = () => {
  return axios.get(`http://localhost:4000/superheroes`);
};

const fetchFriends = () => {
  return axios.get(`http://localhost:4000/friends`);
};

export const ParallelQueries = () => {
  const {
    isLoading: isLoadingSuperHeroes,
    data: dataSuperHeroes,
    isError: isErrorSuperHeroes,
    error: errorSuperHeroes
  } = useQuery('super-heroes', fetchFriends);
  const {
    isLoading: isLoadingFriends,
    data: dataFriends,
    isError: isErrorFriends,
    error: errorFriends
  } = useQuery('super-heroes', fetchSuperHeroes);

  return (
    <>
      <h2>SuperHeroes List</h2>
      {isLoadingSuperHeroes && <h4>Loading Superheoes</h4>}
      {isErrorSuperHeroes && (
        <h4>{errorSuperHeroes.message}</h4>
      )}
      {dataSuperHeroes &&
        dataSuperHeroes.data.map((hero) => {
          return <div key={hero.name}>{hero.name}</div>;
        })}
      <h2>Friends List</h2>
      {isLoadingFriends && <h4>Loading Friends</h4>}
      {isErrorFriends && <h4>{errorFriends.message}</h4>}
      {dataFriends &&
        dataFriends.data.map((hero) => {
          return <div key={hero.name}>{hero.name}</div>;
        })}
    </>
  );
};
