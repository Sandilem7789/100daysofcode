import logo from './logo.svg';
import './App.css';
import React from "react";

const date = new Date();

class App extends React.Component {
   constructor(props){
		super(props);
		this.state = {isLoggedIn: true};
		this.handleLoginClick = this.handleLoginClick.bind(this);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
	}

	handleLoginClick() {
		this.setState({isLoggedIn: true});
	}

	handleLogoutClick() {
		this.setState({isLoggedIn: false});
	}

	render(){
		const isLoggedIn = this.state.isLoggedIn;
		let button;

		if(isLoggedIn) {
			button = <LogoutButton onClick={this.handleLogoutClick}/>;
		}
		else {
			button = <LoginButton onClick={this.handleLoginClick}/>
		}

		return (
			<div className="App">
			  	<header className="App-header">
				 	<img src={logo} className="App-logo" alt="logo" />
				 	<p>
						{date.toLocaleTimeString()}
				 	</p>
					<div>
						<Greeting isLoggedIn={isLoggedIn}/>
						{button}
					</div>
			  	</header>
			</div>
	 	);
  	}	
}

function UserGreeting(props){
	return <h1>Welcome Back!</h1>;
}

function GuestGreeting(props){
	return <h1>Please Sign Up</h1>
}

function Greeting(props){
	const isLoggedIn = props.isLoggedIn;
	if(isLoggedIn) return <UserGreeting />;
	return <GuestGreeting />
}

function LoginButton(props){
	return(
		<button onClick={props.onClick}>
			Login
		</button>
	);
}

function LogoutButton(props){
	return(
		<button onClick={props.onClick}>
			Logout
		</button>
	);
}
export default App;