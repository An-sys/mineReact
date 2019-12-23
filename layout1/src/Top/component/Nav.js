import React from 'react';
import {Link} from "react-router-dom"

export default class Nav extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='top-nav fl'>
				<Link to='/nav1' className='nav'>Nav 1</Link>
				<Link to='/nav2' className='nav'>Nav 2</Link>
				<Link to='/nav3' className='nav'>Nav 3</Link>
			</div>
		);
	}
}
