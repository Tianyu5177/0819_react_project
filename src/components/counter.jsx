import React, { Component } from 'react'
export default class Counter extends Component {

	//加
	increment = ()=>{
		const {selected_number} = this.refs
	}
	//减
	decrement = ()=>{
		const {selected_number} = this.refs
	}
	//奇数加
	incrementIfOdd = ()=>{
		const {selected_number} = this.refs
	}
	//延迟加
	incrementAsync = ()=>{
		const {selected_number} = this.refs
		setTimeout(()=>{

		},500)
	}

	render() {
		return (
			<div>
				{/* this.props.??? */}
				<span>count is {this.props.count}</span><br/>&nbsp;
				<select ref="selected_number">
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>&nbsp;
				<button onClick={this.increment}>+</button>&nbsp;
				<button onClick={this.decrement}>-</button>&nbsp;
				<button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
				<button onClick={this.incrementAsync}>increment async</button>
			</div>
		)
	}
}
