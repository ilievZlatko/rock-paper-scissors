import React from 'react';
import Scores from '../Scores/Scores';
import './OptionHolder.css';

const optionHolder = props => (
	<div className="circle">
		{props.children}
		<Scores score={props.score} />
	</div>
);

export default optionHolder;
