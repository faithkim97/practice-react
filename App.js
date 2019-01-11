import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Greetings = (props) => {
	return <h1>Hello {props.name}!</h1>
}


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'Michael',
		}

	}
	
  render() {
  	const name = this.state.name;
   return (
   		<div>
   			<Greetings name={name} />
   		</div>
   	
   );
  }
}

export default App;
