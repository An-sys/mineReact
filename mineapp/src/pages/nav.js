import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Nav extends Component {
	render() {
		return (
			<div>
				<Link to='/user'>用户管理</Link>
				<br/>
				<Link to='/order'>订单管理</Link>
			</div>
		);
	}
}

export default Nav; 