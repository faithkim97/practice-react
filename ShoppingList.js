import React, { Component } from 'react';
import Food from './Food';



class ShoppingList extends Component {
	constructor(props) {
		super(props);
	}


	renderFood(i) {
		return(
			<Food
				value={this.props.value[i]}
				disabled={this.props.disabled}
				onClick={this.props.onClick(i)}
			/>

		);

	}


	render() {
		return (
			<div>
				{this.renderFood(0)}
				{this.renderFood(1)}
				{this.renderFood(2)}

			</div>
		);
	}//endrender
}//endclass

export default ShoppingList;
