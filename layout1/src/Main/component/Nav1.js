import React from 'react';
import {Switch,Route} from 'react-router-dom'

import MainNav from './Nav1/MainNav' 
import MainHome from './Nav1/MainHome' 
import MainList from './Nav1/MainList' 
import MainApp from './Nav1/MainApp' 

export default class Nav1 extends React.Component {
	

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='main clear'>
				<MainNav></MainNav>
				<Switch>
					<Route exact path='/nav1' component={MainHome}></Route>
					<Route path='/nav1/list' component={MainList}></Route>
					<Route path='/nav1/app' component={MainApp}></Route>
				</Switch>
			</div>
		);
	}
}
