import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Search = ({ handleSetMovies }) => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	console.log(watch('type'));

	console.log('errors: ', errors);

	const onSubmit = async (data) => {
		console.log('data', data);
		const response = await axios.get(
			`http://www.omdbapi.com/?apikey=1d5f192a&s={${data.title}&type=${data.type}&y=${data.year}}`
		);

		handleSetMovies(response.data.Search);

		console.log('response', response.data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				<input
					name='title'
					type='text'
					placeholder='title'
					{...register('title', { required: true })}
				/>
				{errors.title && <small>This field is required</small>}
			</div>
			<div>
				<select name='type' {...register('type')}>
					<option value=''>select</option>
					<option value='movie'>movie</option>
					<option value='series'>series</option>
					<option value='episode'>episode</option>
				</select>
			</div>
			<div>
				<input
					placeholder='year'
					type='text'
					name='year'
					{...register('year')}
				/>
			</div>
			<input type='submit' value='Search' />
		</form>
	);
};

export default Search;
