import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const fetchSuperHero = (id) => {
  return axios.get(
    `http://localhost:4000/superheroes/${id}`
  );
};

export const RQSuperHeroPage = () => {
  const { id } = useParams();
  console.log(id);

  const { isLoading, data, isError, error } = useQuery(
    ['super-hero', id],
    () => fetchSuperHero(id)
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      {data && (
        <div>
          <h2>Name: {data.data.name}</h2>
          <h2>Alter Ego: {data.data.alterEgo}</h2>
        </div>
      )}
    </>
  );
};
