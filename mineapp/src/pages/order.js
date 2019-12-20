import React from 'react';
import 'whatwg-fetch'
import 'es6-promise'

export default class Order extends React.Component {
	

	constructor(props) {
		super(props);
		this.state={
			count:0,
		}
	}

	increment = () => {
		let num = Number(this.select.value)
		this.setState({
			count:(this.state.count+=num)
		})
	}

	reduce = ()=> {
		let num = Number(this.select.value)
		this.setState({
			count:(this.state.count-=num)
		})
		if(this.state.count < 0){
			this.setState({
				count:0
			})
		}
	}
	incrementOdd = ()=> {
		// let count = this.state.count
		if (this.state.count % 2 === 1){
			this.increment()
		}
	}

	async = ()=> {
		setTimeout(()=>{
			this.increment()
		},1000)
	}

	render() {
		return (
			<div>
				<p>click {this.state.count} times</p>
				<select ref={select => this.select = select}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>&nbsp;
				<button onClick={this.increment}>+</button>&nbsp;
				<button onClick={this.reduce}>-</button>&nbsp;
				<button onClick={this.incrementOdd}>increment if odd</button>&nbsp;
				<button onClick={this.async}>increment async</button>&nbsp;
			</div>
		);
	}
}
