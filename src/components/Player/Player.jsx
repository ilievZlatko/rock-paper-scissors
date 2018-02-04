import React from 'react';
import OptionHolder from './OptionHolder/OptionHolder';
import rock from '../../assets/images/rock.svg';
import paper from '../../assets/images/paper.svg';
import scissors from '../../assets/images/scissors.svg';
import './Player.css';

const player = props => {
	let holder;
	switch (props.choice.name) {
		case 'rock':
			holder = (
				<div className="player">
					<OptionHolder score={props.score}>
						<img src={rock} alt={props.choice.name} />
					</OptionHolder>
				</div>
			);
			break;
		case 'paper':
			holder = (
				<div className="player">
					<OptionHolder score={props.score}>
						<img src={paper} alt={props.choice.name} />
					</OptionHolder>
				</div>
			);
			break;
		case 'scissors':
			holder = (
				<div className="player">
					<OptionHolder score={props.score}>
						<img src={scissors} alt={props.choice.name} />
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
