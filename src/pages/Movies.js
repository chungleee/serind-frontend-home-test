import React, { useState } from 'react';
import MovieCard from '../components/MovieCard';
import Search from '../components/Search';

const Movies = () => {
	const [movies, setMovies] = useState();

	console.log('movies', movies);

	const handleSetMovies = (moviesData) => {
		setMovies(moviesData);
	};

	return (
		<div>
			<Search handleSetMovies={handleSetMovies} />

			<div className='flex flex-wrap items-center'>
				{movies &&
					movies.map((movie) => {
						return <MovieCard key={movie.imdbID} movieData={movie} />;
					})}
			</div>
		</div>
	);
};

export default Movies;
