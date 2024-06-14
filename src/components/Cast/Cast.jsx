import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/GetMoviesAPI';
import styles from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      const data = await getCast(movieId);
      setCast(data);
    };

    fetchCast();
  }, [movieId]);

  if (!cast.length) {
    return null;
  }

  return (
    <div>
      <ul className={styles.wrapper}>
        {cast.map(({ id, profile_path, original_name, name, character }) => (
          <li key={id} className={styles.item}>
            <img
              className={styles.image}
              src={
                profile_path
                  ? `https://www.themoviedb.org/t/p/w500/${profile_path}`
                  : `https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg`
              }
              alt={original_name}
            />
            <h3>{name}</h3>
            <p>As: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
