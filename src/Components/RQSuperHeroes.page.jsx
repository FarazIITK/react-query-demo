import { useSuperHeroesData } from '../hooks/useSuperHeroesData';
import { Link } from 'react-router-dom';

export const RQSuperHeroesPage = () => {
  // const [isPolling, setIsPolling] = useState(true);
  // const onSuccess = (data) => {
  //   if (data.data.length === 4) {
  //     setIsPolling(false);
  //   }
  // };
  const { isLoading, data, isError, error } =
    useSuperHeroesData();

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
        data.map((hero) => {
          return (
            <div key={hero.name}>
              <Link to={`/rq-super-heroes/${hero.id}`}>
                {hero.name}
              </Link>
            </div>
          );
        })}
    </>
  );
};
