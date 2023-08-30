import { useParams } from 'react-router-dom';
import { useSuperHeroData } from '../hooks/useSuperHeroData';

export const RQSuperHeroPage = () => {
  const { id } = useParams();

  const { isLoading, data, isError, error } =
    useSuperHeroData(id);

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
