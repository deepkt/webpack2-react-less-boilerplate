import React, { Component } from 'react';

export default class Navigation extends Component {

	render() {
		return (
			<nav className='nav nav-brand'>
				<div className='nav-left'>
					<a className='nav-item'>
						<span className='logo-text'>User Module</span>
					</a>
				</div>
				<div className='nav-right nav-menu'>
					<a className='nav-item'>
						Profile
					</a>
					<a className='nav-item'>
						Logout
					</a>
				</div>
			</nav>
		);
	}
}
