import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetails = () => {
	let history = useHistory();
	const { movieID } = useParams();
	const [movie, setMovie] = useState();

	const handleGetMovie = async (movieID) => {
		const response = await axios.get(
			`http://www.omdbapi.com/?apikey=1d5f192a&i=${movieID}`
		);

		setMovie(response.data);
	};

	useEffect(() => {
		handleGetMovie(movieID);
	}, []);

	return (
		<div>
			<button
				className='w-32 border'
				onClick={() => {
					history.goBack();
				}}
			>
				Back
			</button>

			<div>
				{movie && (
					<div>
						<h1 className='text-5xl'>{movie.Title}</h1>
						<img src={movie.Poster} alt={movie.Title} />
						<p>Year: {movie.Year}</p>
						<p>Type: {movie.Type}</p>
						<p>released: {movie.Released}</p>
						<p>Genre: {movie.Genre}</p>
						<p>Ratings: {movie.Ratings[0].Value}</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default MovieDetails;
