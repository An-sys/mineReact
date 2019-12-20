 import React, { Component } from 'react';
import { HashRouter,Switch,Route } from "react-router-dom";


import Nav from "../pages/nav";
import User from "../pages/user";
import Order from "../pages/order";

class App extends Component {
	render() {
		return (
			<HashRouter>
				<div>
					<Nav></Nav>
					<Switch>
						<Route exact path='/'>Home</Route>
						<Route path='/user' ><User></User></Route>
						<Route path='/order'><Order></Order></Route>
					</Switch>	
				</div>
			</HashRouter>								
		);
	}
}

export default App;




