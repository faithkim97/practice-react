import React, {Component} from 'react';

function Food(props) {
	return (
		<button
			disabled={props.disabled}
			onClick={props.onClick}>
			{props.value.name} &nbsp;
			${props.value.price} &nbsp;
		</button>
	);

}//endfxn

export default Food;
