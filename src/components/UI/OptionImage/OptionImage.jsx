import React from 'react';
import Rock from '../../../assets/images/rock.svg';
import Paper from '../../../assets/images/paper.svg';
import Scissors from '../../../assets/images/scissors.svg';

const optionImage = props => {
	let image;
	switch (props.choice) {
		case 'rock':
			image = <img src={Rock} alt={props.choice} />;
			break;
		case 'paper':
			image = <img src={Paper} alt={props.choice} />;
			break;
		case 'scissors':
			image = <img src={Scissors} alt={props.choice} />;
			break;
		default:
			image = <img src={Rock} alt={props.choice} />;
	}

	return image;
};

export default optionImage;
