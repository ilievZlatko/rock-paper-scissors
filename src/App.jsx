import React, { Component } from 'react';
import Header from './components/Header/Header';
import Scene from './components/Scene/Scene';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Scene />
			</div>
		);
	}
}

export default App;
