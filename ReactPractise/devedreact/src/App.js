import React, { useState } from "react";
import Tweet from "./components/Tweet";

function App(){
	const [isRed, setRed] = useState(false);
	const [count, setCount] = useState(0);

	const increament = () => {
		setCount(count + 1);
		setRed(!isRed);
	}
   	return(
		<div className="app">
			<h1 className={isRed ? "red" : ""}>Change my color!</h1>
			<button onClick={increament}>Increament</button>
			<h1>{count}</h1>
		</div>
	);
}

export default App; 