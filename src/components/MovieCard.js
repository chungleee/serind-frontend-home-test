import React from 'react';

const MovieCard = ({ movieData }) => {
	return (
		<div>
			<h1 className='text-5xl bg-black'>{movieData.Title}</h1>
			<img src={movieData.Poster} alt={movieData.Title} />
			<h2>{movieData.Year}</h2>
			<h3>{movieData.Type}</h3>
		</div>
	);
};

export default MovieCard;
