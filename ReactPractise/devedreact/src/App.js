import React, { useState } from "react";
import Tweet from "./components/Tweet";

function App(){
	const [users, setUsers] = useState([
		{name: "Ed", message: "Hello there John Snow.", likes: "2k"},
		{name: "John", message: "Who is John Snow now??", likes: "4k"},
		{name: "Traversy", message: "Quit it John! this is Ed, Dev Ed!", likes: "6k"}
	]);
	
   	return(
		<div className="app">
			{users.map(user => (
				<Tweet 
					name={user.name}
					message={user.message}
					likes={user.likes}
				/>
			))}
		</div>
	);
}

export default App; 