import React from 'react';
import Logo from './Logo/Logo';
import BurgerBtn from './BurgerBtn/BurgerBtn';
import './Header.css';

const header = () => (
	<header className="header">
		<BurgerBtn />
		<span style={{ fontSize: '24px' }}>ROCK, PAPER, SCISSORS</span>
		<Logo />
	</header>
);

export default header;
