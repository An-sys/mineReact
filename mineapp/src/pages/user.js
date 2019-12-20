import React from 'react';
import {Switch, Route} from "react-router-dom"

import Index from './components/Index'
import Creat from './components/Creat'
import Edit from './components/Edit'


export default class User extends React.Component {
	


	render() {
		return (
			<Switch>
				<Route exact path='/user'><Index></Index></Route>
				<Route path='/user/creat'><Creat></Creat></Route>
				<Route path='/user/edit/:id'><Edit></Edit></Route>
			</Switch>
		);
	}
}
