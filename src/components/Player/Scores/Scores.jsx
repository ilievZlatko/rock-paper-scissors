import React from 'react';
import './Scores.css';

const scores = props => (
	<div className="scores">
		<h6>SCORE:</h6>
		<span>{props.score}</span>
	</div>
);

export default scores;
