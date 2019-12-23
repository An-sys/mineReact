import React from 'react';
import {HashRouter,Switch,Route} from 'react-router-dom'


import Top from './Top'
import Main from './Main'


import Foot from './Foot'
						


export default class App extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<HashRouter>
				<Top></Top>
				<Main></Main>	
				<Foot></Foot>
			</HashRouter>
		);
	}
}
