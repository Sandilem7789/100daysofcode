import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";

const date = new Date();

class App extends Component {
   constructor(props){
		super(props);
	}
	render(){
		return (
			<div className="App">
			  <header className="App-header">
				 <img src={logo} className="App-logo" alt="logo" />
				 <p>
					It is {date.toLocaleTimeString()} 
				 </p>
				 <a href="#" onclick="console.log('The link was clicked')">

				 </a>
		  </header>
		</div>
	 	);
  	}	
}

export default App;
