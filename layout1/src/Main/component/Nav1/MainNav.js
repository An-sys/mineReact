import React from 'react';
import {Link} from 'react-router-dom'

export default class MainNav extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='main-nav clear'>
				<Link to='/nav1' className='nav1-nav nav1-text'>Home</Link>
				<div className='nav1-nav'>/</div>
				<Link to='/nav1/list' className='nav1-nav nav1-text'>List</Link>
				<div className='nav1-nav'>/</div>
				<Link to='/nav1/app' className='nav1-nav nav1-text'>App</Link>
			</div>
		);
	}
}
