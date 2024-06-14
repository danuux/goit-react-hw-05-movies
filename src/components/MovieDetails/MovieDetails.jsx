import React, { useState, useEffect, useRef, Suspense } from 'react';
import { Outlet, Link, useLocation, useParams } from 'react-router-dom';
import { getDetails } from 'services/GetMoviesAPI';
import styles from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const data = await getDetails(movieId);
      setMovie(data);
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const formatAsPercent = num => {
    return new Intl.NumberFormat('default', {
      style: 'percent',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num / 10);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div>
          <Link to={backLinkRef.current} className={styles.link}>
            <button className={styles.backBtn}>← Go back</button>
          </Link>
          <img
            src={
              movie.poster_path
                ? `https://www.themoviedb.org/t/p/w500/${movie.poster_path}`
                : `https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg`
            }
            alt={movie.title}
          />
        </div>
        <div className={styles.details}>
          <h2>
            {movie.title} ({new Date(movie.release_date).getFullYear()})
          </h2>
          <p>User score: {formatAsPercent(movie.vote_average)}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genres.map(genre => genre.name).join(' / ')}</p>
        </div>
      </div>

      <div className={styles.additional}>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
