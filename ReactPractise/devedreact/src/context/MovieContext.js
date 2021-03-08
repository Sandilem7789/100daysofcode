import React, { useState, createContext } from 'react'

/* CONTEXT GETS IMPORTED  */
export const MovieContext = createContext();

/* THE MOVIEPRVIDER'S JOB IS TO HOLD INFORMATION
	AND THEN PASS THAT INFO DOWN TO CHILDREN */
export const MovieProvider = props => {
	const [movies, setMovies] = useState([
		{
			name: 'Harry Potter',
			price: 'R50.00',
			id: 67221
		},
		{
			name: 'Tsotsi',
			price: 'R250.00',
			id: 67222
		},
		{
			name: 'District 9',
			price: 'R190.00',
			id: 67223
		}
	]);
	return (
		<MovieContext.Provider value={[movies, setMovies]}>
			{props.children}
		</MovieContext.Provider>
	)
}