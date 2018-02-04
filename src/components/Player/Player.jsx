import React from 'react';
import OptionHolder from './OptionHolder/OptionHolder';
import OptionImage from '../UI/OptionImage/OptionImage';
import './Player.css';

const player = props => {
	let holder;
	switch (props.choice.name) {
		case 'rock':
			holder = (
				<div className="player">
					<OptionHolder score={props.score}>
						<OptionImage choice={props.choice.name} />
					</OptionHolder>
				</div>
			);
			break;
		case 'paper':
			holder = (
				<div className="player">
					<OptionHolder score={props.score}>
						<OptionImage choice={props.choice.name} />
					</OptionHolder>
				</div>
			);
			break;
		case 'scissors':
			holder = (
				<div className="player">
					<OptionHolder score={props.score}>
						<OptionImage choice={props.choice.name} />
					</OptionHolder>
				</div>
			);
			break;
		default:
			holder = (
				<div className="player">
					<OptionHolder score={props.score} />
				</div>
			);
	}
	if (props.newGame) {
		holder = (
			<div className="player">
				<OptionHolder score={props.score} />
			</div>
		);
	}

	return holder;
};

export default player;
