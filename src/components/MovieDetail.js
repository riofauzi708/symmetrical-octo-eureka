import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const MovieDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=84053d7ee344c3731b571bbd807b1ee4`)
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
          <iframe
            width="100%"
            height="500"
            src="URL_YOUTUBE_VIDEO"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
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
