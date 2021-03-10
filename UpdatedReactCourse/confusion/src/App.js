import React from "react"
import { Navbar, NavbarBrand } from 'reactstrap'
import Menu from "./components/MenuComponent";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar dark color="primary" >
          <div className="container">
            <NavbarBrand href="/">
              Ristorante Con Fusion Madoda
            </NavbarBrand>
          </div>
        </Navbar>
        <Menu />
      </div>
    );
  }
}

export default App;
