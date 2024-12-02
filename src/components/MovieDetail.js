import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import API_KEY from '../../config';

const MovieDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
        .then(response => response.json())
        .then(data => setMovie(data))
        .catch(error => console.error('Error:', error));
    }
  }, [id]);

  return (
    <div className="container">
      {movie ? (
        <div className="movie-detail">
          <h1>{movie.title}</h1>
          <video controls width="100%">
            {/* Kode iklan video */}
            <source src="https://example.com/path/to/ad.mp4" type="video/mp4" />
            {/* Kode video film */}
            <source src="https://example.com/path/to/film.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>{movie.overview}</p>
          <p>Release Date: {movie.release_date}</p>
          <p>Rating: {movie.vote_average}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetail;
