import React, { Component } from 'react';
import Header from './components/Header/Header';
import Scene from './components/Scene/Scene';
import Footer from './components/Footer/Footer';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Scene />
				<Footer />
			</div>
		);
	}
}

export default App;
