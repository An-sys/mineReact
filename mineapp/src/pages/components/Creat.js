import React from 'react'
import axios from 'axios'
import qs from "qs"
import {createHashHistory} from 'history'


 
export default class Creat extends React.Component {
	
	// constructor(props) {
	// 	super(props);
	// 	this.state={
	// 		username:'',
	// 		sex:'',
	// 	}
	// }

	

	handleClick = () =>{
		let username = this.nameInput.value
		let sex = this.sexInput.value
		let user = {
			username,
			sex
		}
		// this.setState({
		// 	username: '1111'
		// })
		// console.log(username)
		console.log(user)
		axios({
			method:'post',
			url:'http://mock-api.com/mnEDOVgJ.mock/user/create',
			headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: qs.stringify(user)
		})
		.then((response)=>{

			createHashHistory().push('/user')
		})
		.catch((error)=>{
			console.log(error.data)
		})
	}

	render() {
		return (
			<div>
				<div>
					uername:
					<input type="text" ref={input => this.nameInput = input}/>
					
				</div>
				<div style={{margin:'10px 0'}}>
					sex:
					<input type="text" ref={input => this.sexInput = input}/>
					
				</div>
				<button onClick={this.handleClick}>保存</button>
			</div>
		);
	}
}
