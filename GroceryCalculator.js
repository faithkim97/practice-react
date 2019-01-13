import React, { Component } from 'react';
import ShoppingList from './ShoppingList'
//todo how to create new button after adding input
//TODO create a field for user input for buttons

function sum(a,b) {
	return a+b;
}



function createBuyMap(currList) {
	return currList.map((groc) => {
		const itemBuy = groc.amount > 0 ? "Item: " + groc.name + " Price: $" + groc.price
		+ " Amount: " + groc.amount : '';
		return (
			<div>
				{itemBuy}
			</div>
		);
	});
}

class GroceryCalculator extends Component {
	constructor(props) {
		super(props);
		this.state = {
			totalCost: 0,
			grocList: [{
				name: "fish",
				price: 100,
				amount: 0,
			},
			{
				name: "beef",
				price: 50,
				amount: 0,
			},
			{
				name: "chicken",
				price: 10,
				amount: 0
			},
			],
			disableButtons: false,
			newItem: '',
			newPrice: 0,
			newAmount: 0,
		};

		this.handleNewItem = this.handleNewItem.bind(this);
		this.handleNewPrice = this.handleNewPrice.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}//endconstructor

	handleTax() {
		const currCost = this.state.totalCost;
		const newCost = currCost * 1.0625 //hardcoding tax
		this.setState({
			totalCost: newCost,
			disableButtons: true,
		});
	}

	handleClick(i) {
		const p = this.state.grocList[i].price;
		this.state.grocList[i].amount += 1;
		const itemList = this.state.grocList[i];
		const currCost = sum(this.state.totalCost, p);
		this.setState({
			totalCost: currCost,
		});

	}

	handleSubmit(e) {
		e.preventDefault();
		const currList = this.state.grocList.slice();
		const {newItem, newPrice, newAmount} = this.state;
		const newCost = sum(this.state.totalCost, newPrice);
		console.log(currList.length);
		this.setState({
			grocList: currList.concat([{
				name: newItem,
				price: newPrice,
				amount: newAmount + 1,
			}]),
			totalCost: newCost,
		});

		console.log("grocList: " + this.state.grocList);
	}

	handleNewItem(e) {
		this.setState({newItem: e.target.value});
	}

	handleNewPrice(e) {
		this.setState({newPrice: parseFloat(e.target.value)});
	}

	render() {
		const currList = this.state.grocList.slice();
		const buyMap = createBuyMap(currList);
		const isDisableBut = this.state.disableButtons;
		return(
			<div>
				<div>
					<ShoppingList
						value={this.state.grocList}
						disabled = {isDisableBut}
						onClick={(i) => this.handleClick.bind(this, i)}
					/>
					<form onSubmit={this.handleSubmit}>
						Name of item: <input type='text' value = {this.state.newItem} onChange={this.handleNewItem}  />
						Price: <input type='number' value = {this.state.newPrice} onChange={this.handleNewPrice}  />
						<input type = "submit" value="Submit"/>
					</form>

				</div>
				<div>
				<h2>Shopping List Calculator</h2>
					<ol>
						{buyMap}
					</ol>
					<h4>Current Total (w/o tax): ${this.state.totalCost} </h4>
				</div>

				<button
					disabled = {isDisableBut}
					onClick={this.handleTax.bind(this)}>
					Get total + tax
				</button>
			</div>
		);
	}
}//endGrocCalclass

export default GroceryCalculator;
