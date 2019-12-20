import React from 'react';
import {Link} from "react-router-dom"
import axios from 'axios'



export default class Index extends React.Component {
	
	
	state={
		users:[]
	}
	

	deleteUser = (userId) => {

	     if (!window.confirm('确定删除吗')) return

	     // //ajax
	     axios.post('http://127.0.0.1:8888/mock.php/user/delete?id=' + userId)
	         //刷新页面
	         // window.location.reload()
	         this.init()

	 }


	init = () => {
		axios.get('http://127.0.0.1:8888/mock.php/user')
			.then(response=>{
				this.setState({users:response.data})
			})
	}
	
	componentDidMount(){
		
		this.init()
	}



	render() {
		return (
			<div>
				<Link to='/user/creat'>新增用户</Link>
				<table border='1'>
					<thead >
						<tr>
							<td>Id</td>
							<td>Username</td>
							<td>Sex</td>
							<td>操作</td>
						</tr>
					</thead>
					<tbody>
						{
							this.state.users.map((item,index)=>(
								<tr key={index}>
									<td>{item.id}</td>
									<td>{item.username}</td>
									<td>{item.sex==1?'男':'女'}</td>
									<td>
										<Link to={'/user/edit/'+item.id}>编辑</Link>
										<a onClick={()=>{this.deleteUser(item.id)}}>删除</a>
									</td>
								</tr>
							))
						}
					</tbody>
				</table>
			</div>
		);
	}
}
