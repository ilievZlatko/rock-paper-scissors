import React, { Component } from 'react';
import Header from './components/Header/Header';
import Scene from './components/Scene/Scene';
import Footer from './components/Footer/Footer';
import ControlBtn from './components/UI/ControlBtn/ControlBtn';
import OptionImage from './components/UI/OptionImage/OptionImage';

class App extends Component {
	state = {
		options: [
			{ name: 'rock', wins: 'scissors' },
			{ name: 'paper', wins: 'rock' },
			{ name: 'scissors', wins: 'paper' }
		],
		playerChoice: {},
		computerChoice: {},
		playerScore: 0,
		computerScore: 0,
		startNewGame: true
	};

	switchPlayerChoiceHandler = option => {
		const computer = this.generateComputerChoice();
		this.setState({ playerChoice: option, computerChoice: computer });
		setTimeout(() => {
			this.compareScores();
		}, 100);
	};

	generateComputerChoice() {
		return this.state.options[
			Math.floor(Math.random() * this.state.options.length)
		];
	}

	compareScores() {
		if (this.state.playerChoice.wins === this.state.computerChoice.name) {
			const currentScore = this.state.playerScore + 1;
			this.setState({ playerScore: currentScore });
		} else if (
			this.state.computerChoice.wins === this.state.playerChoice.name
		) {
			const currenComputerScore = this.state.computerScore + 1;
			this.setState({ computerScore: currenComputerScore });
		}

		this.setState({ startNewGame: false });
	}

	startNewGame = () => {
		this.setState({ startNewGame: true });
	};

	render() {
		const content = this.state.startNewGame ? (
			<div>
				{this.state.options.map((option, i) => {
					return (
						<ControlBtn
							key={`button-${i}`}
							clicked={() =>
								this.switchPlayerChoiceHandler(this.state.options[i])
							}
						>
							<div>
								<OptionImage
									style={{ height: '100%' }}
									choice={this.state.options[i].name}
								/>
							</div>
							{this.state.options[i].name.toUpperCase()}
						</ControlBtn>
					);
				})}
			</div>
		) : (
			<button className="new-game-btn" onClick={this.startNewGame}>
				START NEW GAME
			</button>
		);

		return (
			<div className="App">
				<Header />
				<Scene
					playerChoice={this.state.playerChoice}
					computerChoice={this.state.computerChoice}
					playerScore={this.state.playerScore}
					computerScore={this.state.computerScore}
					newGame={this.state.startNewGame}
				/>
				<Footer>{content}</Footer>
			</div>
		);
	}
}

export default App;
