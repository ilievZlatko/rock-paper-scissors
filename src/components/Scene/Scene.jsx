import React from 'react';
import Player from '../Player/Player';
import './Scene.css';

const scene = props => (
	<div className="scene">
		<h2 className="computer">COMPUTER</h2>
		<Player
			choice={props.computerChoice}
			score={props.computerScore}
			newGame={props.newGame}
		/>
		<h3 className="vs">VS.</h3>
		<Player
			choice={props.playerChoice}
			score={props.playerScore}
			newGame={props.newGame}
		/>
		<h2 className="player">PLAYER</h2>
	</div>
);

export default scene;
