import React from 'react';
import {HashRouter,Switch,Route} from 'react-router-dom'
import './index.scss'

import Nav1 from './component/Nav1'
import Nav2 from './component/Nav2'
import Nav3 from './component/Nav3'
import Cover from './component/Cover'

export default class Main extends React.Component {
	

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Switch>
				<Route exact path='/' component={Cover}></Route>
				<Route path='/nav1' component={Nav1}></Route>
				<Route path='/nav2' component={Nav2}></Route>
				<Route path='/nav3' component={Nav3}></Route>
			</Switch>
		);
	}
}
