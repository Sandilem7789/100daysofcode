import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Nav from "./components/Nav";
import AddMovie from "./components/AddMovie";
import {MovieProvider} from "./context/MovieContext";
import "./App.css";

function App(){

	return(
		<MovieProvider>
			<div className="app">
				<Nav />
				<AddMovie />
				<MovieList />
			</div>
		</MovieProvider>
	);
}

export default App; 