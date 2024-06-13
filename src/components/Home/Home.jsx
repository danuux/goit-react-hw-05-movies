import React, { useEffect, useState } from 'react';
import { GetTrendingDay } from 'services/GetMoviesAPI';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetTrendingDay();
        setMovies(data);
      } catch (error) {
        console.log('error');
      }
    };

    fetchData();
  }, []);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Trending today</h1>

      {movies ? (
        <ul className={styles.items}>
          {movies.map(movie => (
            <li className={styles.item} key={movie.id}>
              <Link to={`movies/${movie.id.toString()}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Home;