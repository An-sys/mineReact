import React from 'react';
import {createHashHistory} from 'history'
import axios from 'axios'
import qs from 'qs'

export default class Edit extends React.Component {
	
	constructor(props){
		super(props)
		this.state={
			id:0,
			username:'',
			sex:'',
		}
		// console.log(props.match.params.id)
	}

	componentDidMount(){
		console.log(this.props.match.params)
		let {id} = this.props.match.params
		axios.get(' http://127.0.0.1:8888/mock.php/user/get?id='+id)
		.then((response)=>{
			this.setState(response.data)
		}).catch((error)=>{
			console.log(error)
		})
	}


	handleClick = () => {
		axios({
            method: 'post',
            url: 'http://127.0.0.1:8888/mock.php/user/update?id=' + this.state.id,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: qs.stringify(this.state)
       	}).then((response)=>{
       		if (response.data.status) {

               this.props.history.push('/user');

           } else {
               alert(response.data)
           }
       	})
	}
	
	render() {
		return (
			<div>
				<div>
					username:
					<input type="text" 
						value={this.state.username}
						onChange={(e)=>{
							this.setState({username:e.target.value})
						}}
					/>
				</div>
				<div style={{margin:'10px 0'}}>
					sex:
					<input type="text" 
						value={this.state.sex}
						onChange={(e)=>{
							this.setState({sex:e.target.value})
						}}
					/>
				</div>
				<button onClick={this.handleClick}>保存</button>
			</div>
		);
	}
}
