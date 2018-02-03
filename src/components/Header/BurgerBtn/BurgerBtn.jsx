import React from 'react';
import './BurgerBtn.css';

const burgerBtn = props => (
	<div className="DrawerToggle" onClick={props.clicked}>
		<div />
		<div />
		<div />
	</div>
);

export default burgerBtn;
