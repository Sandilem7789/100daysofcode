import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";

const date = new Date();

class App extends Component {
   constructor(props){
		super(props);
		this.state = {isToggleOn: true};
	}

	handleClick = () => {
		this.setState(state => ({
			isToggleOn: !state.isToggleOn
		}));
	}

	render(){
		return (
			<div className="App">
			  	<header className="App-header">
				 	<img src={logo} className="App-logo" alt="logo" />
				 	<p>
						It is not {date.toLocaleTimeString()} to the dot 
				 	</p>
				 	<button onClick={this.handleClick}>
						{this.state.isToggleOn ? "ON" : "OFF"}
				 	</button>
			  	</header>
			</div>
	 	);
  	}	
}

export default App;