import { useEffect, useState } from 'react';
import Link from 'next/link';
import API_KEY from '../../config';

const PopularMovies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
                const data = await response.json();

                if (data && data.results) {
                    setMovies(data.results);
                } else {
                    console.error('Invalid data structure', data);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <div className="container">
            <h1 className="text-center my-4">Popular Movies</h1>
            <div className="row">
                {movies.length > 0 ? (
                    movies.map(movie => (
                        <div className="col-md-3 mb-4" key={movie.id}>
                            <div className="card">
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt={movie.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{movie.title}</h5>
                                    <p className="card-text">{movie.overview}</p>
                                    <Link href={`/movie/${movie.id}`} legacyBehavior>
                                        <a className="btn btn-primary">View Details</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default PopularMovies;
