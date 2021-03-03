import './App.css';
import React, {useEffect, useState} from "react";

const App = () => {
	const APP_ID = "6c109b21";
	const APP_KEY = "48f2c68bd1c0f696c70da300c484878b";

	useEffect(() => {
		getRecipes();
	}, []);

	const getRecipes = async() => {
		const response = await fetch(
			`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`,
			);
		const data = response.json();
		console.log(data);
	}

	return(
		<div className="App">
			<form className="search-form">
				<input className="search-bar" type="text" />
				<button className="search-button" type="submit">Search</button>
			</form>
		</div>
	);
}

export default App;