import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movieData }) => {
	return (
		<div className='w-2/6 mb-8' style={{ minHeight: '500px' }}>
			<h1 className='text-5xl'>{movieData.Title}</h1>
			<img src={movieData.Poster} alt={movieData.Title} />
			<h2>Year: {movieData.Year}</h2>
			<h3>Type: {movieData.Type}</h3>
			<Link to={`/${movieData.imdbID}`}>
				<button className='border border-solid border-green-400 w-20'>
					Details
				</button>
			</Link>
		</div>
	);
};

export default MovieCard;
