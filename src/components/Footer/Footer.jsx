import React from 'react';
import ControlBtn from '../UI/ControlBtn/ControlBtn';
import Rock from '../../assets/images/rock.svg';
import Paper from '../../assets/images/paper.svg';
import Scissors from '../../assets/images/scissors.svg';
import './Footer.css';

const footer = () => (
	<footer>
		<ControlBtn>
			<div>
				<img src={Rock} style={{ height: '100%' }} alt="Rock" />
			</div>
			ROCK
		</ControlBtn>
		<ControlBtn>
			<div>
				<img src={Paper} style={{ height: '100%' }} alt="Rock" />
			</div>
			PAPER
		</ControlBtn>
		<ControlBtn>
			<div>
				<img src={Scissors} style={{ height: '100%' }} alt="Rock" />
			</div>
			SCISSORS
		</ControlBtn>
	</footer>
);

export default footer;
