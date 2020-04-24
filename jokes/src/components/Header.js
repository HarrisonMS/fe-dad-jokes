
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
const Header = () => {
	return (
		<div className='headerContainer'>
			<Link to='/' className='headerTitle' to='/'>
				<p>Dad jokes</p>
			</Link>
			<nav className='nav-link-cont'>
       <NavLink className='nav-link' to='/'>
        Home
        </NavLink>
        <NavLink className='nav-link' to='/login'>
        Login
        </NavLink>
        <NavLink className='nav-link' to='/register'>
        Register

</NavLink>

			</nav>

		</div>
	);
};

export default Header;
