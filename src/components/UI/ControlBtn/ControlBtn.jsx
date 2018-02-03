import React from 'react';
import './ControlBtn.css';

const controlBtn = props => (
	<button className="controlBtn" onClick={props.clicked}>
		{props.children}
	</button>
);

export default controlBtn;
