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
		const items = this.props.value.map((item, index) => {
			return <Food
				value={item}
				disabled={this.props.disabled}
				onClick={this.props.onClick(index)}
			/>

		});

		return (

			<div>
				{items}

			</div>
		);
	}//endrender
}//endclass

export default ShoppingList;
