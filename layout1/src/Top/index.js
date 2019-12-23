import React from 'react';
import './index.scss'

import Logo from './component/Logo'
import Nav from './component/Nav'

export default class Top extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='top'>
				<Logo></Logo>
				<Nav></Nav>
			</div>
		);
	}
}
